<template>
    <div id = 'nutri'>
        <form >
            <table >
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
                    <td><input type="text" v-model="description"> </td>
                </tr>
            </table>
        </form>
    </div>
</template>

<style>
    #nutri{
        display: flex;
        justify-content: center;
    }
</style>

<script>
export default {
    name:'NutriForm',
    created(){      
        if(localStorage.getItem('lang')!=null){
            this.lang = localStorage.getItem('lang');
        }
    }
}
</script>