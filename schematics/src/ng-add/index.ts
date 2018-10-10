/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { chain, Rule, Tree } from '@angular-devkit/schematics';
import { getWorkspace } from '@schematics/angular/utility/config';
import { Schema } from './schema';
import { WorkspaceProject, WorkspaceSchema } from '@angular-devkit/core/src/workspace';

import {
  addPackageJsonDependencies,
  addStyleToTarget,
  getProjectFromWorkspace,
  installPackageJsonDependencies
} from '../utils';


/* tslint:disable-next-line: no-default-export */
export default function (options: Schema): Rule {
  return chain([
    addStyles(options),
    addPackageJsonDependencies(),
    installPackageJsonDependencies()
  ]);
}

/* tslint:disable-next-line: no-any */
export function addStyles(options: Schema): (host: Tree) => Tree {
  return function (host: Tree): Tree {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(workspace, options.project);

    insertStyle(project, host, workspace);

    return host;
  };
}

function insertStyle(project: WorkspaceProject, host: Tree, workspace: WorkspaceSchema) {

  const stylePath =  `./node_modules/bootstrap/dist/css/bootstrap.css`;

  addStyleToTarget(project, 'build', host, stylePath, workspace);
  addStyleToTarget(project, 'test', host, stylePath, workspace);
}
