<template>
    <div>
        <!-- <sidebar-menu :menu="menu" /> -->

        <div class="main-sidenav" :class="{ collapsed: sideNavIsCollapsed }">
        	

    		<div class="container-fluid">
    			<h1>ssdasddsadadsds</h1>
    		</div>

	        <sidebar-menu @toggle-collapse="onToggleCollapse" :width="sideNavWidth" :relative="sideNavRelative" :menu="sideNavMenu" />

        </div>
    </div>
</template>

<script>

	import { SidebarMenu } from 'vue-sidebar-menu';

    export default {
        mounted() {
            //console.log('Component mounted.')


        },

        components: {
	        SidebarMenu
	    },


	    data() {
            return {
            	sideNavIsCollapsed: false,
            	sideNavWidth: '350px',
            	sideNavRelative: false,
                sideNavMenu: [
                    {
                        header: true,
                        title: 'Main Navigation',
                        hiddenOnCollapse: true
                    },
                    {
                        href: { path: '/about' },
                        /*href: '/about',*/
                        title: 'About',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/charts',
                        title: 'Charts',
                        icon: 'fa fa-chart-area',
                        child: [
                            {
                                href: '/charts/sublink',
                                title: 'Sub Link'
                            }
                        ]
                    }
                ],

                


            }
        }, 

        methods: {

        	onToggleCollapse(collapsed) {

        		//console.log(collapsed);
        		if(collapsed){
        			this.sideNavIsCollapsed = true;
        		} else {
        			this.sideNavIsCollapsed = false;
        		}
        	},
        },

        props: {


        	relative: {
		      type: Boolean,
		      default: false
		    },

		    width: {
		      type: String,
		      default: '350px'
		    },

		    widthCollapsed: {
		      type: String,
		      default: '50px'
		    },


        }

        
    }
</script>
