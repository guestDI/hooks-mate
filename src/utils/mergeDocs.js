import fs from 'fs/promises';
import path from 'path';

function adjustLinks(content, baseUrl) {
    return content.replace(/\[(.*?)\]\((.*?)\)/g, (match, text, url) => {
        if (url.startsWith('functions/')) {
            return `[${text}](${baseUrl}/${url})`;
        }
        return match;
    });
}

export async function mergeDocsWithGitHubLinks(readmePath, docsPath, outputPath, githubBaseUrl) {
    try {
        if (outputPath) {
            await fs.writeFile(outputPath, '', 'utf8');
        }

        const readmeContent = await fs.readFile(readmePath, 'utf8');
        const docsContent = await fs.readFile(docsPath, 'utf8');
        const updatedDocsContent = adjustLinks(docsContent, githubBaseUrl);

        const newContent = `${readmeContent}\n\n## Documentation\n\n${updatedDocsContent}`;
        await fs.writeFile(outputPath || readmePath, newContent, 'utf8');
        console.log('Documentation successfully merged into README.md with updated GitHub links!');
    } catch (err) {
        console.error('Error merging documentation:', err.message);
    }
}

const projectPath = process.cwd();
const readmePath = path.resolve(projectPath, 'README.md');
const docsPath = path.resolve(projectPath, 'docs/README.md');
const outputPath = readmePath;
const githubBaseUrl = 'https://github.com/guestDI/hooks-mate/blob/main/docs';

mergeDocsWithGitHubLinks(readmePath, docsPath, outputPath, githubBaseUrl);
