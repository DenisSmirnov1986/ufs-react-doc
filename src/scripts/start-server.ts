import fetchRemoteLibs from './fetch-remote-libs';
import buildBundles from './build-bundles';
import generateComponentsJSON from '../utils/generate-components-json';
import start from '../server/';

export default function() {
    Promise.all<any>(fetchRemoteLibs())
        .then(() => generateComponentsJSON(false))
        .then(() => buildBundles(true))
        .then(start)
        .catch(e => console.error(e));
}
