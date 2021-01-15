var app = new Vue(
  {
    el: '#wrapper',
    data: {
      headerNav: [
        {
          name: 'HOME',
          new:false,
          link:'#home',
        },
        {
          name: 'ABOUT',
          new:false,
          link:'https://avada.theme-fusion.com/driving/about/',
        },
        {
          name: 'PRIECES',
          new:false,
          link:'https://avada.theme-fusion.com/driving/prices/',
        },
        {
          name: 'COURSES',
          new:true,
          link:'https://avada.theme-fusion.com/driving/courses/',
        },
        {
          name: 'LOCATIONS',
          new:false,
          link:'https://avada.theme-fusion.com/driving/locations/',
        },
        {
          name: 'BLOG',
          new:false,
          link:'https://avada.theme-fusion.com/driving/blog/',
        }
      ],

      social:[
        {
          icon:  "fab fa-facebook-f",
          link:'https://www.facebook.com',
        },
        {
          icon:"fab fa-twitter",
          link:'https://twitter.com/twitter'
        },
        {
          icon: "fab fa-instagram",
          link:'https://www.instagram.com'
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
          link:'https://avada.theme-fusion.com/driving/courses/intensive-driving-course/',
        },
        {
          contact:'Intensive Course',
          link:'https://avada.theme-fusion.com/driving/courses/intensive-driving-course/',
        },
        {
          contact: 'Automatic',
          link:'https://avada.theme-fusion.com/driving/courses/intensive-driving-course/',
        },
        {
          contact:'Instructor Training',
          link:'https://avada.theme-fusion.com/driving/courses/intensive-driving-course/',

        },
      ],

      footerContacts: [
        {
          icon:'fas fa-home',
          info:'12th Street, New York, 55555',
        },
        {
          icon:'fas fa-phone',
          info:'1.800.555.6789',
        },
        {
          icon:'far fa-envelope',
          info:'info@your-domain.com',
        },
        {
          icon:'fas fa-link',
          info:'Theme-Fusion.com',
        }
      ],

      footerBottom: [
        {
          icon:'fab fa-facebook-f',
          link:'https://www.facebook.com/ThemeFusionAvada/',
        },
        {
          icon:'fab fa-twitter',
          link:'https://twitter.com/Theme_Fusion',
        },
        {
          icon:'fab fa-youtube',
          link:'https://www.youtube.com/channel/UC_C7uAOAH9RMzZs-CKCZ62w',
        },
        {
          icon:'fab fa-instagram',
          link:'https://www.instagram.com/themefusion/',
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
      }
    }
  }
)
