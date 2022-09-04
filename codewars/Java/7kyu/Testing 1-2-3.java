import java.util.*;

public class LineNumbering {
    public static List<String> number(List<String> lines) {
        for(int i = 0; i < lines.size(); i++) {
          String newStr = (i+1) + ": " + lines.get(i);
          lines.set(i, newStr);
        }
      return lines;
    }
}