export class CommonHelper {
    static hyphenSepratedString(text: string) {
        return text.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();;
    }
}