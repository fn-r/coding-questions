import java.util.Arrays;

public class PythagoreanTriple {
	public int pythagoreanTriple(int[] triple){
    Arrays.sort(triple);
    int c = triple[2] * triple[2];
    int sum = (triple[0] * triple[0]) + (triple[1] * triple[1]); // sum = a^2 + b^2
    
    if(sum == c) {
      return 1;
    }
    return 0;
	}	
}
