import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        String[] sizesStr = br.readLine().split(" ");
        String[] bundlesStr = br.readLine().split(" ");
        int T = Integer.parseInt(bundlesStr[0]);
        int P = Integer.parseInt(bundlesStr[1]);

        int tSum = 0;
        for (String sizeStr : sizesStr) {
            int size = Integer.parseInt(sizeStr);
            tSum += (size + T - 1) / T;
        }

        int pBundle = N / P;
        int pSingle = N % P;

        System.out.println(tSum);
        System.out.println(pBundle + " " + pSingle);
    }
}