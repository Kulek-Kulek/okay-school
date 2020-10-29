import React from 'react';

import MainHeader from '../../../Shared/Components/MainHeader/MainHeader';
import Main from '../../../Shared/Components/Main/Main';
import Rule from '../../../Shared/Components/Rule/Rule';
import Navigation from '../../../Shared/Components/Navigation/Navigation';
import Footer from '../../../Shared/Components/Footer/Footer';

import './SchoolRules.css';

const schoolRules = [
    {
        heading: 'postanowienia ogólne',
        rules: [
            'Niniejszy regulamin określa zasady prowadzenia kursów językowych online, z dojazdem do ucznia oraz mieszanych (blended) przez szkołę językową OKAY, zwaną w dalszej części Szkołą.', 'W ramach swoich usług, szkoła prowadzi kursy językowe indywidualne i grupowe.', 'Każdy słuchacz Szkoły, zwany dalej Uczniem, ma obowiązek zapoznania się z niniejszym regulaminem. Rozpoczęcie nauki w Szkole jest tożsame z akceptacją niniejszego regulaminu.', 'W ramach wykupionego przez ucznia kursu językowego Szkoła zobowiązuje się do zapewnienia wykwalifikowanego lektora oraz właściwego doboru programu nauczania w celu realizacji zajęć.']
    },
    {
        heading: 'zapisy na kurs',
        rules: [
            'W celu zapisania się na kurs należy wybrać dowolny kurs z zamieszczonej na stronie internetowej Szkoły oferty i wypełnić formularz zgłoszeniowy. Osoba zainteresowana staje się Uczniem Szkoły po potwierdzeniu dostępności miejsc na wybranym kursie, ustaleniu terminów zajęć i ewentualnym dopasowaniu oferty do indywidualnych potrzeb.', 'Terminy zajęć są ustalane przed rozpoczęciem nauki i są one niezmienne. Istnieje możliwość skorzystania z opcji rozszerzonej w postaci elastycznych (zmiennych) terminów spotkań z lektorem  za dodatkową opłatą. W przypadku zajęć w trybie elastycznym Biuro ustala z uczniem pierwszą godzinę zajęć, a kolejne ustalane są indywidualnie z lektorem. Zajęcia w trybie elastycznym mogą odbywać się 7 dni w tygodniu, w różnych godzinach, ale po wcześniejszym ich potwierdzeniu przez Ucznia i Lektora.', 'Jednostka lekcyjna trwa 50, 60 lub 90 minut w zależności od indywidualnych ustaleń i wykupionego planu lekcji.', 'Możliwe jest również ustalenie indywidualnego programu nauczania wraz z elastycznymi godzinami zajęć. Istnieje również możliwość wykupienia pojedynczych lekcji lub szkolenia zgodnie z cennikiem zamieszczonym na stronie internetowej i-okay.web.app.', 'Na etapie zapisu  do Szkoły i wyboru kursu, zainteresowany nie dokonuje żadnej wpłaty na rzecz Szkoły. Szkoła nie pobiera opłaty wpisowej, ani żadnej innej niż te, które są opłatami za zamówiony kurs. Pierwsza wpłata jest realizowana przez Ucznia dopiero po potwierdzeniu przez Szkołę dostępności miejsc na wybranym kursie.'
        ]
    },
    {
        heading: 'realizacja zajęć',
        rules: [
            'Zakończenie kursu następuje po zrealizowaniu programu nauczania obejmującego przypisaną dla danego kursu liczbę godzin, ale nie później niż do końca roku szkolnego.', 'W przypadku wprowadzenia ograniczeń związanych z sytuacją epidemiologiczną, wszystkie kursy bez względu na ich wcześniejszy charakter, stają się kursami prowadzonymi zdalnie. Uczeń ma prawo wyboru jednej z trzech dogodnej dla siebie platformy nauczania na odległość: Zoom, Teams, Skype.', 'Nieobecność Ucznia na zajęciach nie ma wpływu na wysokość opłat za kurs i nie jest podstawą do reklamacji. W przypadku kursów indywidualnych uczeń ma prawo dwa razy w semestrze odwołać zajęcia. Należy o tym zamiarze poinformować swojego Lektora lub Szkołę nie później niż 24 godziny przed terminem odwoływanych zajęć. W takiej sytuacji termin zakończenia całego kursu przesuwa się o ilość odwołanych godzin lekcyjnych.', 'Powiadomienie Szkoły lub/i Lektora o przełożeniu kolejnych lekcji po wcześniejszym wykorzystaniu możliwości przekładania lekcji w ramach kursu jest bezskuteczne, zatem takie lekcje traktowane będą jako odbyte, nawet w przypadku niestawienia się na nich ucznia.', 'Kurs językowy może zostać zawieszony bez utraty lekcji w uzasadnionych przypadkach z przyczyn losowych lub urlopu. W przypadku zawieszenia kursu jego czas realizacji ulega wydłużeniu o liczbę zajęć na jakie kurs został zawieszony. Zajęcia zaplanowane na okres, kiedy wypadło zawieszenie kursu uczeń może również odrobić na zasadach ogólnych umawiając dodatkowe terminy z lektorem bez konieczności wydłużenia daty całego cyklu.', 'W przypadku braku wznowienia przez ucznia kursu po okresie, na jaki został on zawieszony przyjmuje się, że uczeń zrezygnował z kursu. Jeżeli po okresie zawieszenia kursu uczeń rezygnuje z kursu i jednocześnie posiada wykupione a niewykorzystane lekcje, Szkoła ma prawo do pobrania 50% opłaconych przez Ucznia środków tytułem opłaty za rezerwację miejsca w grafiku Lektora.', ' Rezygnacja z kursu. Uczeń może przerwać naukę po odbyciu wykupionych lekcji bez wcześniejszego wypowiedzenia albo zrezygnować z kursu w dowolnym momencie jego realizacji', 'Uczeń ma prawo zrezygnować z kursu w trakcie trwania pakietu, jednak z uwagi na cykl planowania zajęć, uczeń rezygnując z kursu winien powiadomić o tym zamiarze Szkołę nie później niż 1 miesiąc przed datą przerwania kursu wysyłając rezygnację w formie elektronicznej na adres lugowski.k@gmail.com.', 'Szkoła może odwołać zajęcia w danym dniu z powodów technicznych w dowolnym pakiecie. W tak zaistniałej sytuacji lekcje z danego dnia przechodzą na kolejny termin. W uzasadnionych przypadkach, z wyłączeniem sytuacji losowych, kwestii technicznych niezależnych od Szkoły lub klęski żywiołowej, uczniowi przysługuje dodatkowa lekcja gratis.', 'W przypadku gdy uczeń spóźni się na lekcję lektor jest zobowiązany poczekać 15 minut. Gdy lektor nie może skontaktować się z uczniem po 15 minucie od momentu planowanego rozpoczęcia zajęć, lekcję uznaje się za odbytą. W przypadku gdy lektor spóźni się na lekcję uczeń zobowiązany jest poczekać 15 minut. Czas opóźnienia będzie doliczony do czasu trwania lekcji.', 'Po odbyciu co najmniej 75% zajęć Uczeń ma możliwość otrzymania od Szkoły certyfikatu poświadczającego znajomość języka obcego zgodnie z Europejskim Systemem Opisu Kształcenia Językowego. Aby otrzymać certyfikat należy zdać egzamin wewnętrzny przygotowany przez lektora. Egzamin składa się z części pisemnej i ustnej. Do egzaminu można przystąpić nie wcześniej niż po 1 roku nauki w OKAY oraz po zrealizowaniu całego materiału z danego poziomu: A1, A2, B1, B2, C1 lub C2 zgodnie z Europejskim Opisem Kształcenia Językowego.', 'Szkoła może również, na wniosek Ucznia, wystawić zaświadczenie o realizacji kursu niezależnie od etapu jego realizacji.'
        ]
    },
    {
        heading: 'reklamacje',
        rules: [
            'Wszelkie wnioski o zwroty i reklamacje należy zgłaszać do Biura Obsługi Klienta telefonicznie lub poprzez formularz kontaktowy na stronie internetowej i-okay.web.app. Reklamacja powinna zawierać imię i nazwisko, numer telefonu oraz adres email ucznia, dokładny opis problemu, uzasadnienie.', 'Standardowy czas rozpatrzenia reklamacji wynosi 14 dni roboczych. W sprawach szczególnie skomplikowanych może on zostać wydłużony do 30 dni.', 'W wypadku problemów technicznych po stronie ucznia, które uniemożliwiają przeprowadzenie zajęć następuje strata lekcji bez możliwości reklamacji.', 'W przypadku wystąpienia problemów technicznych po stronie Szkoły uniemożliwiających odbycie zaplanowanych zajęć, Uczeń ma prawo otrzymać dodatkowe lekcje odpowiadające liczby nieodbytych z przyczyn technicznych zajęć.', 'W przypadku nieobecności lektora na wyznaczonej lekcji, lekcja nie przepada i można ją odbyć w dowolnym terminie. Reklamację o nieobecności lektora należy zgłosić w Biurze szkoły za pomocą e-mail lub telefonicznie.'
        ]
    },
    {
        heading: 'postanowienia końcowe',
        rules: [
            'Szkoła OKAY zastrzega sobie prawo do zmiany lektora w trakcie trwania kursu.', 'W uzasadnionych przypadkach uczeń ma prawo do zmiany lektora w trakcie trwania pakietu.', 'Nieprzestrzeganie zasad współżycia społecznego powoduje skreślenie Ucznia z listy słuchaczy.', ' Aktualne informacje o opcjach dodatkowych do kursów językowych online oferowanych przez szkołę OKAY można znaleźć na stronie Szkoły w zakładce ‘Oferta kursów’.', 'Uczeń polecający szkołę OKAY innej osobie otrzymuje 1 darmową lekcję w przypadku gdy nowy uczeń zapisze się na kurs bez lekcji próbnej.', 'Dokonanie opłaty za kurs jest równoznaczne z zapoznaniem się i akceptacją postanowień regulaminu kursów. Aktualny regulamin kursu jest dostępny na stronie internetowej i-okay.web.app.', 'Zgodnie z ustawą o ochronie niektórych praw konsumentów Klient ma możliwość odstąpienia od umowy po złożeniu pisemnej rezygnacji z kursu przesłanej drogą mailową na adres mailowy biura Szkoły.'
        ]
    }];

const SchoolRules = props => {

    let setOfRules = schoolRules.map((rule, index) => (
        <React.Fragment key={rule.heading + index}>
            <li className='school-rule__heading'>{rule.heading}</li>

            <Rule rules={rule.rules} />

        </React.Fragment>
    ))

    return (
        <React.Fragment>
            <MainHeader>
                <Navigation />
            </MainHeader>
            <Main mainClassName='school-rules__main'>
                <div className='school-rules__heading-div'>
                    <p className='school-rules__heading'>Regulamin szkoły językowej OKAY</p>
                </div>
                <ul>
                    {setOfRules}
                </ul>
            </Main>
            <Footer />
        </React.Fragment>
    );
}

export default SchoolRules;