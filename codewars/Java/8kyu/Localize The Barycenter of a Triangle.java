import java.text.DecimalFormat;

class Barycenter {
    public static double[] barTriang(double[] a, double[] b, double[] c) {
      double xA = a[0], yA = a[1];
      double xB = b[0], yB = b[1];
      double xC = c[0], yC = c[1];
      
      DecimalFormat df = new DecimalFormat("#.0000");
      String x0 = df.format((xA + xB + xC) / 3);
      String y0 = df.format((yA + yB + yC) / 3);
      double[] center = {Double.parseDouble(x0), Double.parseDouble(y0)};
      return center;
    }
}