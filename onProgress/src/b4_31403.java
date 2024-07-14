import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

class Main {
    public static void main(String[] args) throws IOException {
        System.setIn(new FileInputStream("src/input.txt"));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        String a = br.readLine();
        String b = br.readLine();
        String c = br.readLine();

        int integerA = Integer.parseInt(a);
        int integerB = Integer.parseInt(b);
        int integerC = Integer.parseInt(c);

        System.out.println(integerA + integerB - integerC);
        System.out.println(Integer.parseInt(a + b) - integerC);
    }
}