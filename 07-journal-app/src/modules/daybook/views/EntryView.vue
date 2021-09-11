<template>
    <template v-if="entry">
        <div
            class="entry-title d-flex justify-content-between p-2">
            <div>
                <span class="text-success fs-3 fw-bold">{{day}}</span>
                <span class="mx-1 fs-3">{{month}}</span>
                <span class="mx-2 fs-4 fw-light">{{yearDay}}</span>
            </div>
            <div>
                <input
                    v-show="false"
                    type="file"
                    @change="onSelectedImage"
                    ref="imageSelector"
                    accept="image/png, image/jpeg"
                >
                <button class="btn btn-danger mx-2" @click="onDeleteEntry" v-if="entry.id">
                    Borrar
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="btn btn-primary " @click="onSelectImage">
                    Subir foto 
                    <i class="fa fa-upload"></i>
                </button>
            </div>
        </div>
        <hr>
        <div class="d-flex flex-column px-3 h-75">
            <textarea
                v-model="entry.text"
                placeholder="¿Que sucedió hoy?"
            ></textarea>
        </div>
        
        <!-- <img
            class="img-thumbnail"
            width="500"
            height="450"
            src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTXTItGe_WhSapgSydJU92LCgSWszJ4j_JkMuU5revTBQAGtF4KI4za1rR018f0s0mCfCUxGvWfaADHV8wyE_c" alt="entry pictture"
        > -->

        <img
            v-if="localImage"
            :src="localImage"
            class="img-thumbnail"
            width="500"
            height="450"
            alt="entry pictture"
        >
        <Fab
            :icon="'fa-save'"
            @save-entry="saveEntry"
        />
    </template>
</template>

<script>
    import Swal from 'sweetalert2'
    import { defineAsyncComponent } from 'vue';
    import { mapGetters, mapActions } from 'vuex'
    import getDayMonthYear from './../helpers/getDayMonthYear'

    export default {
        props:{
            id:{
                type: String,
                required: true
            }
        },
        components:{
            Fab: defineAsyncComponent( ()=> import('./../components/Fab')) //lazy load component
        },
        data(){
            return {
                entry: null,
                localImage: null,
                file: null,
            }
        },
        created(){
            this.loadEntry()
        },
        computed:{
            ...mapGetters('journal',['getEntryById']),
            day(){
                const { day } = getDayMonthYear(this.entry.date)
                return day
            },
            month(){
                const { month } = getDayMonthYear(this.entry.date)
                return month
            },
            yearDay(){
                const { yearDay } = getDayMonthYear(this.entry.date)
                return yearDay
            }
        },
        methods:{
            ...mapActions('journal',['createEntry', 'updateEntry','deleteEntry']),
            loadEntry(){
                let entry
                if( this.id === 'new' ){
                    entry = {
                        text: '',
                        date: new Date().getTime()
                    }

                } else {
                     entry = this.getEntryById(this.id)
                    if( !entry ) return this.$router.push({name:'no-entry'})
                }
                this.entry = entry
            },
            async saveEntry(){
                new Swal({
                    title: 'Espere por favor',
                    allowOutsideClick: false,
                })
                Swal.showLoading()

                if( this.entry.id ){
                    //actualizar
                    await this.updateEntry(this.entry)
                } else {
                    const id = await this.createEntry(this.entry)
                    this.$router.push({name:'entry', params:{ id }})
                }
                Swal.fire('Guardado', 'Entrada registrada con éxito', 'success')
            },
            async onDeleteEntry(){
                const { isConfirmed } = await Swal.fire({
                    title: '¿Está seguro?',
                    text:'Una vez borrado no podrá recuperarlo',
                    showDenyButton: true,
                    confirmButtonText: 'Sí borrar',
                    denyButtonText: 'Cancelar',
                })
                if( isConfirmed ){
                    new Swal({
                        title: 'Espere por favor',
                        allowOutsideClick: false,
                    })
                    Swal.showLoading()

                    await this.deleteEntry(this.entry.id)
                    this.$router.push({name:'no-entry'})
                    Swal.fire('Borrado', '', 'success')
                }
            },
            onSelectedImage(event){
                const file = event.target.files[0]
                if( !file ){
                    this.localImage = null
                    this.file = null
                    return
                }
                this.file = file
                const fr = new FileReader()
                fr.onload = () => this.localImage = fr.result
                fr.readAsDataURL( file )
            },
            onSelectImage(){
                this.$refs.imageSelector.click()
            }
        },
        watch:{
            id(){
                this.loadEntry()
            }   
        }
    }
</script>

<style lang="scss" scoped>
    textarea{
        font-size: 20px;
        border: none;
        height: 100%;

        &:focus{
            outline: none;
        }
    }
    img{
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2)
    }
</style>