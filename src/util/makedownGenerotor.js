import { markdown } from 'markdown';

const generatorHTML = (text, wrapper) => {
    return markdown.toHTML(text);
}

export { generatorHTML };