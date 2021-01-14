var app = new Vue(
  {
    el: '#wrapper',
    data: {
      headerNav: [
        {
          name: 'HOME',
          new:false,
          link:'#',
        },
        {
          name: 'ABOUT',
          new:false,
          link:'#',
        },
        {
          name: 'PRIECES',
          new:false,
          link:'#',
        },
        {
          name: 'COURSES',
          new:true,
          link:'#',
        },
        {
          name: 'LOCATIONS',
          new:false,
          link:'#',
        },
        {
          name: 'BLOG',
          new:false,
          link:'#',
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
          name:'Grant Harvey',
          avatar: "img/testimonial-grant.png",
        },
        {
          name: 'Kate Lewis',
          avatar:"img/testimonial-kate.png",
        },
        {
          name: 'Kelly Johnson',
          avatar:"img/testimonial-kelly.png",
        },
      ],
      footerCourses: [
        {
          contact:'Pass Plus',
          link:'#',
        },
        {
          contact:'Intensive Course',
          link:'#',
        },
        {
          contact: 'Automatic',
          link:'#',
        },
        {
          contact:'Instructor Training',
          link:'#',

        },
      ],
      footerContacts: [
        {
          icon:'home',
          info:'12345 North Main Street, New York NY, 555555',
          link:'#',
        },
        {
          icon:'phone',
          info:'1.800.555.6789',
          link:'#',
        },
        {
          icon:'envelope',
          info:'info@your-domain.com',
          link:'#',
        },
        {
          icon:'link',
          info:'Theme-Fusion.com',
          link:'#',
        }
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
      },

      // funzione per generare icone fontawesome
      getIcon:function(icon) {
         return 'fa fa-'+icon;
      },
    }
  }
)
