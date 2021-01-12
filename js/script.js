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
      active: 'HOME'
    },

    methods: {

		SetActive: function(newIndex){
			this.active = newIndex;
		}
	}
  }
)
