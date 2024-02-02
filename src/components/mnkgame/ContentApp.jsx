import React from 'react'

export default function ContentApp() {
    // TODO Improve code to better maintability

    let joueur // 1 pour x et 2 pour o

    let carre1 // 1 pour x et 2 pour o
    let carre2
    let carre3
    let carre4
    let carre5
    let carre6
    let carre7
    let carre8
    let carre9

    let carre = 0

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(1)
        max = Math.floor(2)
        return Math.floor(Math.random() * (max - min + 1)) + 1
    }

    // function nouvellePartie() {

    //     getRandomIntInclusive(1, 2);

    //     switch (getRandomIntInclusive(1, 2)) {
    //     case 1:
    //         let newParagraph = document.getElementById('infos1');
    //         newParagraph.innerText = "Joueur x";

    //         joueur = 1;

    //         break;

    //         case 2:
    //         let newParagraph1 = document.getElementById('infos1');
    //         newParagraph1.innerText = "Joueur o";

    //         joueur = 2;

    //         break;
    //     }

    //     let newParagraph1 = document.getElementById('carre1');
    //     newParagraph1.innerText = "";

    //     let newParagraph2 = document.getElementById('carre2');
    //     newParagraph2.innerText = "";

    //     let newParagraph3 = document.getElementById('carre3');
    //     newParagraph3.innerText = "";

    //     let newParagraph4 = document.getElementById('carre4');
    //     newParagraph4.innerText = "";

    //     let newParagraph5 = document.getElementById('carre5');
    //     newParagraph5.innerText = "";

    //     let newParagraph6 = document.getElementById('carre6');
    //     newParagraph6.innerText = "";

    //     let newParagraph7 = document.getElementById('carre7');
    //     newParagraph7.innerText = "";

    //     let newParagraph8 = document.getElementById('carre8');
    //     newParagraph8.innerText = "";

    //     let newParagraph9 = document.getElementById('carre9');
    //     newParagraph9.innerText = "";

    // }

    function nouvellefenetre() {
        getRandomIntInclusive(1, 2)

        switch (getRandomIntInclusive(1, 2)) {
            case 1:
                let newParagraph = document.getElementById('infos1')
                newParagraph.innerText = 'Joueur x'

                joueur = 1

                break

            case 2:
                let newParagraph1 = document.getElementById('infos1')
                newParagraph1.innerText = 'Joueur o'

                joueur = 2

                break
        }
    }
    nouvellefenetre()

    function finDePartieLigne1() {
        switch (carre1) {
            case 1:
                switch (carre2) {
                    case 1:
                        switch (carre3) {
                            case 1:
                                let newParagraph2 =
                                    document.getElementById('infos1')
                                newParagraph2.innerText = 'Joueur x a gagné !'

                                joueur = 0

                                carre = 0

                            default:
                        }

                    default:
                }

            default:
        }

        switch (carre1) {
            case 2:
                switch (carre2) {
                    case 2:
                        switch (carre3) {
                            case 2:
                                let newParagraph2 =
                                    document.getElementById('infos1')
                                newParagraph2.innerText = 'Joueur o a gagné !'

                                joueur = 0

                                carre = 0

                            default:
                        }

                    default:
                }

            default:
        }
    }

    function finDePartieLigne2() {
        switch (carre4) {
            case 1:
                switch (carre5) {
                    case 1:
                        switch (carre6) {
                            case 1:
                                let newParagraph2 =
                                    document.getElementById('infos1')
                                newParagraph2.innerText = 'Joueur x a gagné !'

                                joueur = 0

                                carre = 0

                            default:
                        }

                    default:
                }

            default:
        }

        switch (carre4) {
            case 2:
                switch (carre5) {
                    case 2:
                        switch (carre6) {
                            case 2:
                                let newParagraph2 =
                                    document.getElementById('infos1')
                                newParagraph2.innerText = 'Joueur o a gagné !'

                                joueur = 0

                                carre = 0

                            default:
                        }

                    default:
                }

            default:
        }
    }

    function finDePartieLigne3() {
        switch (carre7) {
            case 1:
                switch (carre8) {
                    case 1:
                        switch (carre9) {
                            case 1:
                                let newParagraph2 =
                                    document.getElementById('infos1')
                                newParagraph2.innerText = 'Joueur x a gagné !'

                                joueur = 0

                                carre = 0

                            default:
                        }

                    default:
                }

            default:
        }

        switch (carre7) {
            case 2:
                switch (carre8) {
                    case 2:
                        switch (carre9) {
                            case 2:
                                let newParagraph2 =
                                    document.getElementById('infos1')
                                newParagraph2.innerText = 'Joueur o a gagné !'

                                joueur = 0

                                carre = 0

                            default:
                        }

                    default:
                }

            default:
        }
    }

    function finDePartieColonne1() {
        switch (carre1) {
            case 1:
                switch (carre4) {
                    case 1:
                        switch (carre7) {
                            case 1:
                                let newParagraph2 =
                                    document.getElementById('infos1')
                                newParagraph2.innerText = 'Joueur x a gagné !'

                                joueur = 0

                                carre = 0

                            default:
                        }

                    default:
                }

            default:
        }

        switch (carre1) {
            case 2:
                switch (carre4) {
                    case 2:
                        switch (carre7) {
                            case 2:
                                let newParagraph2 =
                                    document.getElementById('infos1')
                                newParagraph2.innerText = 'Joueur o a gagné !'

                                joueur = 0

                                carre = 0

                            default:
                        }

                    default:
                }

            default:
        }
    }

    function finDePartieColonne2() {
        switch (carre2) {
            case 1:
                switch (carre5) {
                    case 1:
                        switch (carre8) {
                            case 1:
                                let newParagraph2 =
                                    document.getElementById('infos1')
                                newParagraph2.innerText = 'Joueur x a gagné !'

                                joueur = 0

                                carre = 0

                            default:
                        }

                    default:
                }

            default:
        }

        switch (carre2) {
            case 2:
                switch (carre5) {
                    case 2:
                        switch (carre8) {
                            case 2:
                                let newParagraph2 =
                                    document.getElementById('infos1')
                                newParagraph2.innerText = 'Joueur o a gagné !'

                                joueur = 0

                                carre = 0

                            default:
                        }

                    default:
                }

            default:
        }
    }

    function finDePartieColonne3() {
        switch (carre3) {
            case 1:
                switch (carre6) {
                    case 1:
                        switch (carre9) {
                            case 1:
                                let newParagraph2 =
                                    document.getElementById('infos1')
                                newParagraph2.innerText = 'Joueur x a gagné !'

                                joueur = 0

                                carre = 0

                            default:
                        }

                    default:
                }

            default:
        }

        switch (carre3) {
            case 2:
                switch (carre6) {
                    case 2:
                        switch (carre9) {
                            case 2:
                                let newParagraph2 =
                                    document.getElementById('infos1')
                                newParagraph2.innerText = 'Joueur o a gagné !'

                                joueur = 0

                                carre = 0

                            default:
                        }

                    default:
                }

            default:
        }
    }

    function finDePartieDiagonal1() {
        switch (carre1) {
            case 1:
                switch (carre5) {
                    case 1:
                        switch (carre9) {
                            case 1:
                                let newParagraph2 =
                                    document.getElementById('infos1')
                                newParagraph2.innerText = 'Joueur x a gagné !'

                                joueur = 0

                                carre = 0

                            default:
                        }

                    default:
                }

            default:
        }

        switch (carre1) {
            case 2:
                switch (carre5) {
                    case 2:
                        switch (carre9) {
                            case 2:
                                let newParagraph2 =
                                    document.getElementById('infos1')
                                newParagraph2.innerText = 'Joueur o a gagné !'

                                joueur = 0

                                carre = 0

                            default:
                        }

                    default:
                }

            default:
        }
    }

    function finDePartieDiagonal2() {
        switch (carre3) {
            case 1:
                switch (carre5) {
                    case 1:
                        switch (carre7) {
                            case 1:
                                let newParagraph2 =
                                    document.getElementById('infos1')
                                newParagraph2.innerText = 'Joueur x a gagné !'

                                joueur = 0

                                carre = 0

                            default:
                        }

                    default:
                }

            default:
        }

        switch (carre3) {
            case 2:
                switch (carre5) {
                    case 2:
                        switch (carre7) {
                            case 2:
                                let newParagraph2 =
                                    document.getElementById('infos1')
                                newParagraph2.innerText = 'Joueur o a gagné !'

                                joueur = 0

                                carre = 0

                            default:
                        }

                    default:
                }

            default:
        }
    }

    function finDePartieMatchNul() {
        switch (carre) {
            case 9:
                let newParagraph2 = document.getElementById('infos1')
                newParagraph2.innerText = 'Match nul !'

                joueur = 0

            default:
        }
    }

    function nouveauTourCarre1() {
        switch (joueur) {
            case 1:
                let newParagraph1 = document.getElementById('carre1')
                newParagraph1.innerText = 'x'

                let newParagraph2 = document.getElementById('infos1')
                newParagraph2.innerText = 'Joueur o'

                carre1 = 1

                joueur = 2

                break

            case 2:
                let newParagraph3 = document.getElementById('carre1')
                newParagraph3.innerText = 'o'

                let newParagraph4 = document.getElementById('infos1')
                newParagraph4.innerText = 'Joueur x'

                carre1 = 2

                joueur = 1

                break
        }

        carre++

        finDePartieLigne1()
        finDePartieColonne1()
        finDePartieDiagonal1()

        finDePartieMatchNul()
    }

    function nouveauTourCarre2() {
        switch (joueur) {
            case 1:
                let newParagraph1 = document.getElementById('carre2')
                newParagraph1.innerText = 'x'

                let newParagraph2 = document.getElementById('infos1')
                newParagraph2.innerText = 'Joueur o'

                carre2 = 1

                joueur = 2

                break

            case 2:
                let newParagraph3 = document.getElementById('carre2')
                newParagraph3.innerText = 'o'

                let newParagraph4 = document.getElementById('infos1')
                newParagraph4.innerText = 'Joueur x'

                carre2 = 2

                joueur = 1

                break
        }

        carre++

        finDePartieLigne1()
        finDePartieColonne2()

        finDePartieMatchNul()
    }

    function nouveauTourCarre3() {
        switch (joueur) {
            case 1:
                let newParagraph1 = document.getElementById('carre3')
                newParagraph1.innerText = 'x'

                let newParagraph2 = document.getElementById('infos1')
                newParagraph2.innerText = 'Joueur o'

                carre3 = 1

                joueur = 2

                break

            case 2:
                let newParagraph3 = document.getElementById('carre3')
                newParagraph3.innerText = 'o'

                let newParagraph4 = document.getElementById('infos1')
                newParagraph4.innerText = 'Joueur x'

                carre3 = 2

                joueur = 1

                break
        }

        carre++

        finDePartieLigne1()
        finDePartieColonne3()
        finDePartieDiagonal2()

        finDePartieMatchNul()
    }

    function nouveauTourCarre4() {
        switch (joueur) {
            case 1:
                let newParagraph1 = document.getElementById('carre4')
                newParagraph1.innerText = 'x'

                let newParagraph2 = document.getElementById('infos1')
                newParagraph2.innerText = 'Joueur o'

                carre4 = 1

                joueur = 2

                break

            case 2:
                let newParagraph3 = document.getElementById('carre4')
                newParagraph3.innerText = 'o'

                let newParagraph4 = document.getElementById('infos1')
                newParagraph4.innerText = 'Joueur x'

                carre4 = 2

                joueur = 1

                break
        }

        carre++

        finDePartieLigne2()
        finDePartieColonne1()

        finDePartieMatchNul()
    }

    function nouveauTourCarre5() {
        switch (joueur) {
            case 1:
                let newParagraph1 = document.getElementById('carre5')
                newParagraph1.innerText = 'x'

                let newParagraph2 = document.getElementById('infos1')
                newParagraph2.innerText = 'Joueur o'

                carre5 = 1

                joueur = 2

                break

            case 2:
                let newParagraph3 = document.getElementById('carre5')
                newParagraph3.innerText = 'o'

                let newParagraph4 = document.getElementById('infos1')
                newParagraph4.innerText = 'Joueur x'

                carre5 = 2

                joueur = 1

                break
        }

        carre++

        finDePartieLigne2()
        finDePartieColonne2()
        finDePartieDiagonal1()
        finDePartieDiagonal2()

        finDePartieMatchNul()
    }

    function nouveauTourCarre6() {
        switch (joueur) {
            case 1:
                let newParagraph1 = document.getElementById('carre6')
                newParagraph1.innerText = 'x'

                let newParagraph2 = document.getElementById('infos1')
                newParagraph2.innerText = 'Joueur o'

                carre6 = 1

                joueur = 2

                break

            case 2:
                let newParagraph3 = document.getElementById('carre6')
                newParagraph3.innerText = 'o'

                let newParagraph4 = document.getElementById('infos1')
                newParagraph4.innerText = 'Joueur x'

                carre6 = 2

                joueur = 1

                break
        }

        carre++

        finDePartieLigne2()
        finDePartieColonne3()

        finDePartieMatchNul()
    }

    function nouveauTourCarre7() {
        switch (joueur) {
            case 1:
                let newParagraph1 = document.getElementById('carre7')
                newParagraph1.innerText = 'x'

                let newParagraph2 = document.getElementById('infos1')
                newParagraph2.innerText = 'Joueur o'

                carre7 = 1

                joueur = 2

                break

            case 2:
                let newParagraph3 = document.getElementById('carre7')
                newParagraph3.innerText = 'o'

                let newParagraph4 = document.getElementById('infos1')
                newParagraph4.innerText = 'Joueur x'

                carre7 = 2

                joueur = 1

                break
        }

        carre++

        finDePartieLigne3()
        finDePartieColonne2()
        finDePartieDiagonal2()

        finDePartieMatchNul()
    }

    function nouveauTourCarre8() {
        switch (joueur) {
            case 1:
                let newParagraph1 = document.getElementById('carre8')
                newParagraph1.innerText = 'x'

                let newParagraph2 = document.getElementById('infos1')
                newParagraph2.innerText = 'Joueur o'

                carre8 = 1

                joueur = 2

                break

            case 2:
                let newParagraph3 = document.getElementById('carre8')
                newParagraph3.innerText = 'o'

                let newParagraph4 = document.getElementById('infos1')
                newParagraph4.innerText = 'Joueur x'

                carre8 = 2

                joueur = 1

                break
        }

        carre++

        finDePartieLigne3()
        finDePartieColonne2()

        finDePartieMatchNul()
    }

    function nouveauTourCarre9() {
        switch (joueur) {
            case 1:
                let newParagraph1 = document.getElementById('carre9')
                newParagraph1.innerText = 'x'

                let newParagraph2 = document.getElementById('infos1')
                newParagraph2.innerText = 'Joueur o'

                carre9 = 1

                joueur = 2

                break

            case 2:
                let newParagraph3 = document.getElementById('carre9')
                newParagraph3.innerText = 'o'

                let newParagraph4 = document.getElementById('infos1')
                newParagraph4.innerText = 'Joueur x'

                carre9 = 2

                joueur = 1

                break
        }

        carre++

        finDePartieLigne3()
        finDePartieColonne3()
        finDePartieDiagonal1()

        finDePartieMatchNul()
    }

    return (

// set className

        <div>
            <button
                type="submit"
                id="btn-new-game"
                onClick="location.reload();"
            >
                Nouvelle partie
            </button>

            <table id="table">
                <tr>
                    <td id="carre1">
                        <button
                            className="buttonplay"
                            onClick="nouveauTourCarre1();"
                        ></button>
                    </td>
                    <td id="carre2">
                        <button
                            className="buttonplay"
                            onClick="nouveauTourCarre2();"
                        ></button>
                    </td>
                    <td id="carre3">
                        <button
                            className="buttonplay"
                            onClick="nouveauTourCarre3();"
                        ></button>
                    </td>
                </tr>
                <tr>
                    <td id="carre4">
                        <button
                            className="buttonplay"
                            onClick="nouveauTourCarre4();"
                        ></button>
                    </td>
                    <td id="carre5">
                        <button
                            className="buttonplay"
                            onClick="nouveauTourCarre5();"
                        ></button>
                    </td>
                    <td id="carre6">
                        <button
                            className="buttonplay"
                            onClick="nouveauTourCarre6();"
                        ></button>
                    </td>
                </tr>
                <tr>
                    <td id="carre7">
                        <button
                            className="buttonplay"
                            onClick="nouveauTourCarre7();"
                        ></button>
                    </td>
                    <td id="carre8">
                        <button
                            className="buttonplay"
                            onClick="nouveauTourCarre8();"
                        ></button>
                    </td>
                    <td id="carre9">
                        <button
                            className="buttonplay"
                            onClick="nouveauTourCarre9();"
                        ></button>
                    </td>
                </tr>
            </table>

            <div id="infos-partie">
                <p id="infos1"></p>
            </div>

            <p id="cacher"></p>
        </div>
    )
}
