Pusher.logToConsole = true;




new Vue({
    el: '#app',
    data: {
        messages: [],
        name: null,
        text: null,
    },
    methods: {
        sendMessage() {
            let formData = new FormData();
            formData.append('name', this.name);
            formData.append('message', this.text);

            fetch('http://192.168.10.108/send/', {
                method: 'post',
                body: formData,
            })

            this.text = ''
            this.$refs.textInput.focus()
                // this.messages.push({ name: this.name, message: this.text })

        }
    },
    created() {

        this.name = prompt('What is your name')

        var pusher = new Pusher('f1441a10a3b22e52a3c4', {
            cluster: 'eu'
        });
        var channel = pusher.subscribe('room');
        channel.bind('message-received', (data) => {
            this.messages.push({ name: data.name, message: data.text })
        });
    },
    mounted() {
        this.$refs.textInput.focus()
    }
});