public class Main {

    public static void main() {

        coche miCoche;

        miCoche.incrementa_puertas(4);
        System.out.println(miCoche.puertas);

    }

    class coche {
        int puertas;

        void incrementa_puertas( int a ) {
            puertas++;
        }
    }

}