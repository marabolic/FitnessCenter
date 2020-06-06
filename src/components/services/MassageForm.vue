<template>
    <div id = 'massage'>
        <form>
            <table>
                <tr>
                    <td v-if="lang=='en'"> Name: </td>
                    <td v-else> Ime: </td>
                    <td><input type="text" v-model="name"> </td>
                </tr>
                <tr>
                    <td v-if="lang=='en'"> Surname: </td>
                    <td v-else> Prezime: </td>
                    <td><input type="text" v-model="surname"> </td>
                </tr>
                <tr>
                    <td v-if="lang=='en'"> Email: </td>
                    <td v-else> E-posta: </td>
                    <td><input type="text" v-model="email"> </td>
                </tr>
                <tr>
                    <td v-if="lang=='en'"> Phone number: </td>
                    <td v-else> Broj telefona: </td>
                    <td><input type="text" v-model="phone"> </td>
                </tr>
                <tr>
                    <td v-if="lang=='en'"> Date: </td>
                    <td v-else> Datum: </td>
                    <td><input type="text" v-model="date"> </td>
                </tr>
                <tr>
                    <td v-if="lang=='en'"> Description: </td>
                    <td v-else> Opis problema: </td>
                    <td><input type="text" v-model='description'> </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <button type="button" @click="generate"  class='btn btn-outline-dark'>Add</button>
                    </td>
                </tr>
            </table>
        </form>
    </div>
</template>

<style>
    #massage{
        display: flex;
        justify-content: center;
    }
</style>

<script>

import jspdf from 'jspdf'

export default {
    name:'MassageForm',
    data(){
        return{
            name: '',
            surname: '',
            email: '',
            phone: '',
            date: '',
            description: ''
        }
    },
    created(){      
        if(localStorage.getItem('lang')!=null) {
            this.lang = localStorage.getItem('lang');
        }
    },
    methods:{
        generate(){
            const doc = new jspdf();
            doc.text("Name: ",15,15);
            doc.text(this.name, 70, 15);
            doc.text("Surname: ",15,20);
            doc.text(this.surname, 70, 20);
            doc.text("Email: ",15,25);
            doc.text(this.email, 70, 25);
            doc.text("Phone Number: ",15,30);
            doc.text(this.phone, 70, 30);
            doc.text("Date: ",15,35);
            doc.text(this.date, 70, 35);
            doc.text("Description: ",15,40);
            doc.text(this.description, 70, 40);
            doc.save("MasazaRezervacija.pdf");
        }
    }
}
</script>