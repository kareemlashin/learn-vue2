export default {
    data() {
        return {
            allNews: "5a",
            x: " ",
            htm: "<h6>h6</h6>",
            mod: '',
            ny: ['ll', 'lllll', 'lllllllll']
        };
    },
    props: [],
    methods: {
        all() {
            alert("ok")
        },
        go() {
            this.$router.push('/All')
        }
    },
    filters: {
        //Filters  aut put  of data
        // transform data
        // output logic
        up(val) {
            return val.toUpperCase()
        }

    },
    mounted() {
        this.$refs.title.style.color = "#09c"
    },
    created() {},
    updated() {},
    computed: {
        //computed properties 
        //calack logic 
        // not render
        //run 1 every call
        // as property
        // any change
        call: function() {
            alert('ok')
            return 1
        },
        dataNews: function() {
            return 5
        }
    },
    watch: {
        // subscribe any 
    },
}