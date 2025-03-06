export default class GrammarErrorHelper {
    static validateSyntax(parser: any): string[] {
        const syntaxErrors: string[] = [];
        parser.removeErrorListeners();
        parser.addErrorListener({
            syntaxError: (recognizer, offendingSymbol, line, charPositionInLine, msg, e) => {
                syntaxErrors.push(`Line ${line}:${charPositionInLine} - ${msg}`);
            }
        });
        console.log(syntaxErrors,"syntaxErrors")
        return syntaxErrors;
    }
}