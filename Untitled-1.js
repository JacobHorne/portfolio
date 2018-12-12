<script>
  import { butter } from '@/buttercms'
  export default {
    name: 'BlogPost',
    data() {
      return {
        post: {},
        postList: {},
        postUrl:'',
        postTitle:'',
        postDescription:''
      }
    },
    methods: {
      getPost() {
        butter.post.retrieve(this.$route.params.slug)
          .then((res) => {
            this.post = res.data.data
            console.log(this.post)
            this.postUrl = `http://findassistance.org/${this.post.url}`;
            this.postTitle = this.post.title;
            this.postDescription = this.post.meta_description;
            console.log(this.postDescription);
          }).catch((res) => {
            console.log(res);
          })
      },
      getPosts() {
        butter.post.list({
          page: 1,
          page_size: 3
        }).then((res) => {
          // console.log(res.data)
          this.postList = res.data.data
        })
      }, 
    },
    watch: {
      $route(to, from) {
        this.getPost()
      }
    },
    created() {
      this.getPost();
      this.getPosts();
    } 
  }
</script>