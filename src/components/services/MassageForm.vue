<template>
    <div id = 'massage'>
        <form>
            <table>
                <tr>
					<td></td>
					<td>
					<p class='errors' v-if="errors.length">
						<b>Please correct the following error(s):</b>
						<ul>
							<li v-for="error in errors" :key="error">{{ error }}</li>
						</ul>
					</p>
					</td>
				</tr>
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
                    <td><input type="email" v-model="email"> </td>
                </tr>
                <tr>
                    <td v-if="lang=='en'"> Phone number: </td>
                    <td v-else> Broj telefona: </td>
                    <td><input type="text" v-model="phone"> </td>
                </tr>
                <tr>
                    <td v-if="lang=='en'"> Date: </td>
                    <td v-else> Datum: </td>
                    <td><input type="date" v-model="date"> </td>
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
            description: '',
            errors: []
        }
    },
    created(){      
        if(localStorage.getItem('lang')!=null) {
            this.lang = localStorage.getItem('lang');
        }
    },
    methods:{
        checkForm(){
			this.errors = [];

			if (!this.name) {
				this.errors.push("Name required.");
			}
			if(!this.surname){
				this.errors.push("Surname required.");
			}
			if (!this.email) {
				this.errors.push('Email required.');
			} else if (!this.validEmail(this.email)) {
				this.errors.push('Valid email required.');
			}
			if(!this.phone){
				this.errors.push("Phone number required.");
			}

			if (!this.errors.length) {
				return true;
			}
			return false;
		},
		validEmail(){
			var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(this.email);
		},
        generate(){

            
			if (this.checkForm() == false){
				return;
            }
            
            const doc = new jspdf();
            if (this.lang == "en"){
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
            }
            else{
				doc.text("Ime: ",15,15);
                doc.text(this.name, 70, 15);
                doc.text("Prezime: ",15,20);
                doc.text(this.surname, 70, 20);
                doc.text("E-posta: ",15,25);
                doc.text(this.email, 70, 25);
                doc.text("Broj telefona: ",15,30);
                doc.text(this.phone, 70, 30);
                doc.text("Datum: ",15,35);
                doc.text(this.date, 70, 35);
                doc.text("Opis problema: ",15,40);
                doc.text(this.description, 70, 40);
			}
            doc.save("MasazaRezervacija.pdf");
        }
    }
}
</script>