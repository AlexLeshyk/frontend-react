import { Project, Directory, Node } from 'ts-morph';
import path from 'path';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();
const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDirectory = project.getDirectory(uiPath);
const componentsDirs = sharedUiDirectory?.getDirectories();

const isIgnoredFile = (name: string) => name === 'index.ts' || /\.(stories|test|spec)\.tsx?$/.test(name);

function buildIndexSource(directory: Directory) {
  const lines: string[] = [];

  directory
    .getDescendantSourceFiles()
    .filter((file) => !isIgnoredFile(file.getBaseName()))
    .forEach((file) => {
      const specifier = directory.getRelativePathAsModuleSpecifierTo(file);
      const values: string[] = [];
      const types: string[] = [];

      file.getExportedDeclarations().forEach((declarations, name) => {
        const exportedName = name === 'default' ? file.getBaseNameWithoutExtension() : name;
        const alias = name === 'default' ? `default as ${exportedName}` : name;
        const isType = declarations.every(
          (d) => Node.isInterfaceDeclaration(d) || Node.isTypeAliasDeclaration(d),
        );

        (isType ? types : values).push(alias);
      });

      if (values.length) lines.push(`export { ${values.join(', ')} } from '${specifier}';`);
      if (types.length) lines.push(`export type { ${types.join(', ')} } from '${specifier}';`);
    });

  return `${lines.join('\n')}\n`;
}

function isAbsolute(value: string) {
  const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];
  return layers.some((layer) => value.startsWith(layer));
}

componentsDirs?.forEach((directory) => {
  const indexFilePath = `${directory.getPath()}/index.ts`;
  const indexFile = directory.getSourceFile(indexFilePath);

  if (!indexFile) {
    directory.createSourceFile(indexFilePath, buildIndexSource(directory), { overwrite: true }).save();
  }
});

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();
  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();
    const valueWithoutAlias = value.replace('@/', '');

    const segments = valueWithoutAlias.split('/');

    const isSharedLayer = segments?.[0] === 'shared';
    const isUiSlice = segments?.[1] === 'ui';

    if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiSlice) {
      const result = valueWithoutAlias.split('/').slice(0, 3).join('/');
      importDeclaration.setModuleSpecifier(`@/${result}`);
    }
  });
});

project.save();
