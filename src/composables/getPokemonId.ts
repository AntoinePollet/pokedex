export default (url: string) => {
    const splittedUrl = url.split('/');
    return url.split('/')[splittedUrl.length - 2];
}
