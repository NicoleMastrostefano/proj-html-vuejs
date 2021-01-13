var app = new Vue(
  {
    el: '#wrapper',
    data: {
      nav: [
        {
          name: 'HOME',
        },
        {
          name: 'ABOUT',
        },
        {
          name: 'PRIECES',
        },
        {
          name: 'COURSES',
        },
        {
          name: 'LOCATIONS',
        },
        {
          name: 'BLOG',
        }
      ],

      testimonials:[
        {
          name: 'Sophia Jones',
          avatar:"img/testimonial-sophia.png",
        },
        {
          name: 'Harold Green',
          avatar:"img/testimonial-harold.png"
        },
        {
          name:'Grant     Harvey',
          avatar: "img/testimonial-grant.png",
        },
        {
          name: 'Kate Lewis',
          avatar:"img/testimonial-kate.png",
        },
        {
          name: 'Kelly',
          avatar:"img/testimonial-kelly.png",
        },
      ],
      active: '',
      avatarIndex:0,
      autoplay:""
    },

    // funzione per autoplay avatar
    created:function(){
      this.autoplay = setInterval(
        () => this.nextImage(),4000
      )
    },

    methods: {
      // funzione per attivare link navbar
  		SetActive: function(newIndex){
  			this.active = newIndex;
  		},

      // funzione per attivare avatar
      nextImage: function(){
        this.avatarIndex ++;
        if (this.avatarIndex==this.testimonials.length){
          this.avatarIndex=0
        }
      },

      // funzione per attivare il dot
      dotActive: function(index){
        (this.avatarIndex = index)
      }
	  }
  }
)
