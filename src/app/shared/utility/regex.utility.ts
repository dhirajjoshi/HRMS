export class Regex{
    static charsOnly(): string | RegExp {
      return'^[a-zA-Z_ ]*$'
    }
    static numbersOnly(): string | RegExp {
        return'^[0-9]*$'
      }
}