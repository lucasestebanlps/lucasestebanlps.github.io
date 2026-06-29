/**
 * Project list for the Projects section.
 *
 * The data lives in `projects.json`, which is edited through the Decap CMS
 * admin panel (see `public/admin/`). You normally don't edit this file —
 * add/edit projects from the CMS, or edit `projects.json` directly.
 *
 * Tech icon names come from https://icones.js.org (use the `simple-icons:` set).
 */

import data from './projects.json';

// A stable id derived from the title, used as the React key.
const slugify = (str) =>
  str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

/** @type {Array<object>} */
export const projects = data.projects.map((project) => ({
  ...project,
  id: slugify(project.title),
}));
