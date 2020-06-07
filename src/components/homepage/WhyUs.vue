<template>
    <div v-if="lang=='en'">
        <h3>Why us?</h3>
        The Pilav fitness center is designed to provide the most demanding training conditions with its concept
        athletes as well as recreational athletes and children. Hundreds of different devices of the latest generation 
        offer athletes such training conditions that can not be found anywhere in the region. Pilav objects are currently
        located at 10 locations in the Serbian capital Belgrade. The development of the Pilav continues so that in
        5 more Pilav will be opened in Belgrade, after which the largest cities in Serbia will get one NAME each.
        The Pilav club exists out of love and dedication to sports and the idea of the Pilav brand is to popularize and
        stimulating people, youth and children to do sports. Our goal is to help everyone who is
        help is needed and we are able to help.
    </div>
    <div v-else>
        <h3>Zasto mi?</h3>
        Pilav fitnes centar je osmisljen tako da svojim konceptom pruzi uslove za trening kako najzahtevnijim 
        sportistima tako i rekreativcima i deci. Stotine najrazlicitijih sprava poslednje generacije nude 
        sportistima takve uslove za trening kakvi se ne mogu naci nigde u regionu. Pilav objekti se trenutno 
        nalaze na 10 lokacija u glavnom gradu Srbije Beogradu. Razvoj Pilava se nastavlja tako da ce se u 
        Beogradu otvoriti jos 5 Pilava, a nakon toga ce najveci gradovi Srbije dobiti po jedan Pilav.
        Pilav klub postoji iz ljubavi i predanosti prema sportu i ideja Pilav brenda je popularizacija i 
        stimulacija ljudi, omladine i dece da se bave sportom. Nas cilj je da pomognemo svima kojima je 
        pomoc potrebna i kojima smo u mogucnosti da pomognemo.
    </div>

</template>

<script>
export default {
    name: 'WhyUs',
    created(){      
        if(localStorage.getItem('lang')!=null){
            this.lang = localStorage.getItem('lang');
        }
    }
}
</script>