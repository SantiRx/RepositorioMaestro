const pages = [
  principal
];

const components = [
  hero,
  seccionEventos

];

export { pages, components}; 


function principal(){
    return {
        view: () => [
           m(hero),
           m(seccionEventos)
        ]
    }
}





//CODIGO DE PAGINAS

function Menu() {
  return {
      model: {
          imagen: "assets/mt-2288-home-logo.png",
          botonCotizacion: "COTIZA AQUI",
          linkContacto: "contact/",
          items: [
              {
                  nombreMenu: "HOGAR",
                  link: "./"
              }, 
              {
                nombreMenu: "ACERCA DE",
                children: [
                  {
                    nombreMenu: "HISTORIA",
                    link: "#"
                  },
                  {
                    nombreMenu: "CONTACTO",
                    link: "#"
                  },
                  {
                    nombreMenu: "POLITICA DE PRIVACIDAD",
                    link: "#"
                  }
                ]
                },
                {
                  nombreMenu: "HISTORIA",
              },
              {
                nombreMenu: "BLOG",
                link: "tienda"
            },                
              {
                  nombreMenu: "CONTACTO",
                  link: "./"
              },
          ]
      },
      view: () => [
        m("div.container-fluid.align-items-center", {"style":{"padding-right":"0px","padding-left":"0px","padding-bottom":"0px","padding-top":"25px","flex":"0 0 auto","justify-content":"center","position":"relative","margin":"0px","box-sizing":"border-box","background-color":"black"}}, 
  m("div.row", {"style":{"padding-right":"15px","padding-left":"15px","margin-left":"auto","margin-right":"auto","margin":"0px 31.5px","padding":"0px 15px","width":"100%","box-sizing":"border-box"}}, 
    m("div.col-md-3.col-12",  
      m("div", 
        m("div", {"style":{"padding-right":"0px","padding-left":"0px","padding-bottom":"15px","padding-top":"0px","font-size":"0px","flex":"0 0 auto","position":"relative","margin":"0px","box-sizing":"border-box"}}, 
          m("a", {"href":"/","data-action":"page","style":{"position":"relative","overflow":"hidden","transition":"all 0.3s ease 0s","display":"inline-block","max-width":"100%","text-decoration":"none solid rgb(51, 122, 183)","color":"rgb(51, 122, 183)","margin":"0px","padding":"0px","box-sizing":"border-box","background-color":"rgba(0, 0, 0, 0)"}}, 
            m("img.img-fluid", {"src":this.state.model.imagen,"style":{"transition":"all 0.3s ease 0s","width":"250px","max-width":"100%","height":"auto","margin":"0px","padding":"0px","box-sizing":"border-box","vertical-align":"middle","border":"0px none rgb(51, 122, 183)"}})
          )
        )
      )
    
      )  ,
              m("div.col-lg-7.col-12", 
                m("div", {"style":{"padding-right":"0px","padding-left":"0px","padding-bottom":"0px","padding-top":"0px","flex":"0 0 auto","justify-content":"right","position":"relative","box-sizing":"border-box"}}, 
                  m("div", {"style":{"padding-right":"0px","padding-left":"0px","padding":"0px","width":"100%","box-sizing":"border-box"}}, 
                    m("div", {"data-container":"container","style":{"padding":"0px","display":"flex","flex-wrap":"wrap","box-sizing":"border-box"}},
                      [
                        m("div", {"data-enabled-side-spacing":"false","data-widget":"row.column","data-container":"container","data-spacing":"aaaa","data-bg-position":"left top","style":{"padding-right":"15px","padding-left":"15px","padding-bottom":"0px","padding-top":"0px","justify-content":"center","display":"flex","flex-direction":"column","position":"relative","margin":"0px","padding":"0px 15px","width":"100%","min-height":"1px","box-sizing":"border-box"}}, 
                          m("div", {"data-widget-id":"wid_1653919113_pvserqvgz","data-preset":"default","data-widget":"menu","style":{"padding-right":"0px","padding-left":"0px","padding-bottom":"15px","padding-top":"0px","flex":"0 0 auto","text-align":"right","position":"relative","margin":"0px","box-sizing":"border-box"}},
                            [
                              m("a", {"href":"#","style":{"color":"rgb(49, 49, 49)","background-color":"rgb(255, 255, 255)","width":"40px","height":"40px","padding":"0px 8px","display":"none","text-align":"right","text-decoration":"none solid rgb(49, 49, 49)","margin":"0px","box-sizing":"border-box"}}, 
                                m("i", {"style":{"font-size":"24px","line-height":"40px","margin":"0px","padding":"0px","box-sizing":"border-box","display":"inline-block","font-style":"normal","font-variant":"normal","font-kerning":"auto","font-optical-sizing":"auto","font-feature-settings":"normal","font-variation-settings":"normal","font-weight":"400","font-stretch":"100%","font-family":"FontAwesome","text-rendering":"auto","-webkit-font-smoothing":"antialiased"}})
                              ),
                              m("ul", {"style":{"display":"inline-block","list-style":"outside none none","margin":"0px","padding":"0px","box-sizing":"border-box"}},
                                this.state.model.items.map(item => 
                                  m(OpcionesMenu, { nombreMenu: item.nombreMenu, link: item.link, children: item.children })
                                )
                              )
                            ]
                          )
                        )
                      ]
                    )
                  )
                )
              ),
              
              m("div.col-lg-1.col-12", 
    m("div", 
        m("a", {
            "class": "button-link",
            "href": "/contact/",
            "data-action": "page",
            "style": {"font-family": "Poppins, sans-serif","font-weight": "500","font-style": "normal","color": "rgb(39, 39, 39)","background-color": "rgb(255, 255, 255)","border-color": "rgba(0, 0, 0, 0)","font-size": "16px","padding": "17px 10px","min-width": "180px","position": "relative","text-align": "center", "z-index": "1","transition": "all 0.3s ease 0s","line-height": "14px","border": "1px solid rgba(0, 0, 0, 0)","display": "inline-block","cursor": "pointer","text-decoration": "none solid rgb(39, 39, 39)","margin": "0px","box-sizing": "border-box"
            },
            "onmouseenter": () => {
                event.target.style.borderColor = "white";event.target.style.backgroundColor = "rgba(0, 0, 0, 0)";event.target.style.color = "white";
            },
            "onmouseleave": () => {
                event.target.style.borderColor = "rgba(0, 0, 0, 0)";event.target.style.backgroundColor = "rgb(255, 255, 255)";event.target.style.color = "rgb(39, 39, 39)";
            }
        }, this.state.model.botonCotizacion)
    )
              )
  )
        )

      ]
    }
  }


function OpcionesMenu() {
  let showChildren = false; // Variable para controlar la visibilidad de los submenús

  return {
      view: ({ attrs }) => [
          m("li", {
              "class": attrs.isActive ? "active" : "", // Agregar la clase 'active' si el menú está activo
              "style": {
                  "display": "inline-block",
                  "position": "relative",
                  "padding": "0px",
                  "box-sizing": "border-box"
              },
              // Eventos de hover para mostrar y ocultar los submenús
              onmouseenter: () => {
                  showChildren = true;
              },
              onmouseleave: () => {
                  showChildren = false;
              }
          }, [
              m("a", {
                  "href": attrs.link,
                  "data-action": "page",
                  "style": {
                      "font-size": "20px",
                      "font-family": "Poppins, sans-serif",
                      "font-weight": "400",
                      "font-style": "normal",
                      "color": "rgb(255, 255, 255)",
                      "text-decoration": "none solid rgb(49, 49, 49)",
                      "background-color": "rgba(0, 0, 0, 0)",
                      "line-height": "16px",
                      "padding": "15px 18px",
                      "position": "relative",
                      "display": "block",
                      "text-align": "left",
                      "transition": "all 0.3s ease 0s",
                      "z-index": "1",
                      "letter-spacing": "normal",
                      "margin": "0px",
                      "box-sizing": "border-box"
                  }
              }, attrs.nombreMenu),
              // Renderizar los submenús si están definidos y showChildren es true
              attrs.children && (showChildren || attrs.children.some(child => child.showChildren)) && m("ul", {
                  "style": {
                      "background-color": "rgb(255, 255, 255)",
                      "border-color": "rgba(0, 0, 0, 0)",
                      "padding-top": "88px",
                      "min-width": "290px",
                      "padding": "18px 30px",
                      "left": "0px",
                      "box-shadow": "rgba(136, 136, 136, 0.26) 0px 2px 12px 0px",
                      "display": "block",
                      "position": "absolute",
                      "z-index": "500",
                      "margin": "0px",
                      "box-sizing": "border-box"
                  }
              }, attrs.children.map(child => m(OpcionesSubMenu, child)))
          ])
      ]
  };
}




function OpcionesSubMenu() {
return {
  view: ({attrs}) => [
    m("li", {"style":{"display":"block","position":"relative","margin":"0px","padding":"0px","box-sizing":"border-box"}}, 
      m("a", {"href": attrs.link, "data-action":"page","style":{"font-size":"14px","font-family":"Poppins, sans-serif","font-weight":"400","font-style":"normal","color":"rgb(0, 0, 0)","text-decoration":"none solid rgb(49, 49, 49)","background-color":"rgba(0, 0, 0, 0)","line-height":"16px","padding":"10px 18px","position":"relative","display":"block","text-align":"left","transition":"all 0.3s ease 0s","z-index":"1","letter-spacing":"normal","margin":"0px","box-sizing":"border-box"}}, 
        attrs.nombreMenu
      )
    )
  ]
}
}

      

function hero(){
  return{
    model:{
      imagen:"assets/filarmonica-hero.jpg",
      imagenLogo:"assets/mt-2288-home-logo.png",
      TextoSobreTitulo:"Alcanzar la grandeza",
      Titulo:"FILARMÓNICA",
      Subtitulo:"ORQUESTA",
      TextoBoton:"OBTENER TICKETS",
      botonCotizacion: "COTIZA AQUI",
          linkContacto: "contact/",
          items: [
              {
                  nombreMenu: "HOGAR",
                  link: "./"
              }, 
              {
                nombreMenu: "ACERCA DE",
                children: [
                  {
                    nombreMenu: "HISTORIA",
                    link: "#"
                  },
                  {
                    nombreMenu: "CONTACTO",
                    link: "#"
                  },
                  {
                    nombreMenu: "POLITICA DE PRIVACIDAD",
                    link: "#"
                  }
                ]
                },
                {
                  nombreMenu: "HISTORIA",
              },
              {
                nombreMenu: "BLOG",
                link: "tienda"
            },                
              {
                  nombreMenu: "CONTACTO",
                  link: "./"
              },
          ]
      
    },
    view: () => [m("div.container-fluid", {"style":{"position":"relative","background-image":"url('"+ this.state.model.imagen +"')","background-position":"center","background-repeat":"no-repeat","background-size":"cover","padding-bottom":"170px","padding-right":"0px","padding-left":"0px","padding-top":"15px","margin":"0px","padding":"15px 0px 170px","box-sizing":"border-box"}}, 
                  m("div", {"style": {"position": "absolute","top": "0","left": "0","width": "100%","height": "100%","background-color": "rgba(0, 0, 0, 0.6)"}}),              
                   m("div", {"style":{"padding-right":"15px","padding-left":"15px","margin":"0px","box-sizing":"border-box"}}, 
                    m("div", {"style":{"display": "flex","justify-content": "center" ,"margin-left":"-15px","margin-right":"-15px","padding":"0px","display":"flex","flex-wrap":"wrap","box-sizing":"border-box"}}, 
                      m("div", {"style":{"flex":"0 0 100%","max-width":"100%","padding-right":"0px","padding-left":"0px","padding":"0px","margin":"0px","position":"relative","width":"100%","min-height":"1px","box-sizing":"border-box"}},
                      [
                        m("div.container-fluid.align-items-center", {"style":{"padding-right":"0px","padding-left":"0px","padding-bottom":"0px","padding-top":"25px","flex":"0 0 auto","justify-content":"center","position":"relative","margin":"0px","box-sizing":"border-box"}}, 
                          m("div.row", {"style":{"padding-right":"15px","padding-left":"15px","margin-left":"auto","margin-right":"auto","padding":"0px 15px","width":"100%","box-sizing":"border-box"}}, 
                            m("div.col-md-3.col-12",  
                              m("div", 
                                m("div", {"style":{"padding-right":"0px","padding-left":"0px","padding-bottom":"15px","padding-top":"0px","font-size":"0px","flex":"0 0 auto","position":"relative","margin":"0px","box-sizing":"border-box"}}, 
                                  m("a", {"href":"/","data-action":"page","style":{"position":"relative","overflow":"hidden","transition":"all 0.3s ease 0s","display":"inline-block","max-width":"100%","text-decoration":"none solid rgb(51, 122, 183)","color":"rgb(51, 122, 183)","margin":"0px","padding":"0px","box-sizing":"border-box","background-color":"rgba(0, 0, 0, 0)"}}, 
                                    m("img.img-fluid", {"src":this.state.model.imagenLogo,"style":{"transition":"all 0.3s ease 0s","width":"250px","max-width":"100%","height":"auto","margin":"0px","padding":"0px","box-sizing":"border-box","vertical-align":"middle","border":"0px none rgb(51, 122, 183)"}})
                                  )
                                )
                              )
                            
                              )  ,
                                m("div.col-lg-7.col-12", 
                                  m("div", {"style":{"padding-right":"0px","padding-left":"0px","padding-bottom":"0px","padding-top":"0px","flex":"0 0 auto","justify-content":"right","position":"relative","box-sizing":"border-box"}}, 
                                    m("div", {"style":{"padding-right":"0px","padding-left":"0px","padding":"0px","width":"100%","box-sizing":"border-box"}}, 
                                      m("div", {"data-container":"container","style":{"padding":"0px","display":"flex","flex-wrap":"wrap","box-sizing":"border-box"}},
                                        [
                                          m("div", {"data-enabled-side-spacing":"false","data-widget":"row.column","data-container":"container","data-spacing":"aaaa","data-bg-position":"left top","style":{"padding-right":"15px","padding-left":"15px","padding-bottom":"0px","padding-top":"0px","justify-content":"center","display":"flex","flex-direction":"column","position":"relative","margin":"0px","padding":"0px 15px","width":"100%","min-height":"1px","box-sizing":"border-box"}}, 
                                          m("div", {"data-widget-id":"wid_1653919113_pvserqvgz","data-preset":"default","data-widget":"menu","style":{"padding-right":"0px","padding-left":"0px","padding-bottom":"15px","padding-top":"0px","flex":"0 0 auto","text-align":"right","position":"relative","margin":"0px","box-sizing":"border-box"}},
                                          [
                                            m("a", {"href":"#","style":{"color":"rgb(49, 49, 49)","background-color":"rgb(255, 255, 255)","width":"40px","height":"40px","padding":"0px 8px","display":"none","text-align":"right","text-decoration":"none solid rgb(49, 49, 49)","margin":"0px","box-sizing":"border-box"}}, 
                                            m("i", {"style":{"font-size":"24px","line-height":"40px","margin":"0px","padding":"0px","box-sizing":"border-box","display":"inline-block","font-style":"normal","font-variant":"normal","font-kerning":"auto","font-optical-sizing":"auto","font-feature-settings":"normal","font-variation-settings":"normal","font-weight":"400","font-stretch":"100%","font-family":"FontAwesome","text-rendering":"auto","-webkit-font-smoothing":"antialiased"}})
                                            ),
                                            m("ul", {"style":{"display":"inline-block","list-style":"outside none none","margin":"0px","padding":"0px","box-sizing":"border-box"}},
                                            this.state.model.items.map(item => 
                                            m(OpcionesMenu, { nombreMenu: item.nombreMenu, link: item.link, children: item.children })
                                            )
                                          )
                                        ]
                                      )
                                     )
                                    ]
                                  )
                                )
                                  )
                                      ),
                                      
                                      m("div.col-lg-1.col-12", 
                            m("div", 
                                m("a", {"class": "button-link","href": "/contact/","data-action": "page",
                                    "style": {"font-family": "Poppins, sans-serif","font-weight": "500","font-style": "normal","color": "rgb(39, 39, 39)","background-color": "rgb(255, 255, 255)","border-color": "rgba(0, 0, 0, 0)","font-size": "16px","padding": "17px 10px","min-width": "180px","position": "relative","text-align": "center", "z-index": "1","transition": "all 0.3s ease 0s","line-height": "14px","border": "1px solid rgba(0, 0, 0, 0)","display": "inline-block","cursor": "pointer","text-decoration": "none solid rgb(39, 39, 39)","margin": "0px","box-sizing": "border-box"
                                    },
                                    "onmouseenter": () => {
                                        event.target.style.borderColor = "white";event.target.style.backgroundColor = "rgba(0, 0, 0, 0)";event.target.style.color = "white";
                                    },
                                    "onmouseleave": () => {
                                        event.target.style.borderColor = "rgba(0, 0, 0, 0)";event.target.style.backgroundColor = "rgb(255, 255, 255)";event.target.style.color = "rgb(39, 39, 39)";
                                    }
                                }, this.state.model.botonCotizacion)
                            )
                          )
                        )
                      )
                    ]

            ),
            m("div.container-fluid", {"style":{"display": "flex","justify-content": "center" ,"position":"static","margin":"0px","padding":"0px","box-sizing":"border-box"}}),
            m("div.row", {"style":{"padding-top":"120px","flex":"0 0 auto","position":"relative","margin":"0px","box-sizing":"border-box"}}, 
              m("div", {"style":{"max-width":"1200px","padding-right":"15px","padding-left":"15px","margin-left":"auto","margin-right":"auto","margin":"0px 31.5px","padding":"0px 15px","width":"100%","box-sizing":"border-box"}}, 
                m("div", {"style":{"display": "flex","justify-content": "center" ,"margin-left":"-15px","margin-right":"-15px","padding":"0px","display":"flex","flex-wrap":"wrap","box-sizing":"border-box"}}, 
                  m("div", {"style":{"flex":"0 0 100%","max-width":"100%","padding-right":"15px","padding-left":"15px","padding-bottom":"0px","padding-top":"0px","position":"relative","margin":"0px","padding":"0px 15px","width":"100%","min-height":"1px","box-sizing":"border-box"}},
                    [
                      m("div", {"style":{"padding-right":"0px","padding-left":"0px","padding-bottom":"40px","padding-top":"0px","position":"relative","margin":"0px","box-sizing":"border-box"}}, 
                        m("div", {"style":{"padding":"0px 1px","margin":"0px","box-sizing":"border-box"}},
                          [
                            m("p", {"style":{"text-align":"center","font-weight":"400","font-style":"normal","font-family":"'Nexa Rust Script L', sans-serif","color":"rgb(255, 255, 255)","font-size":"36px","line-height":"54px","letter-spacing":"3px","margin":"0px","padding":"0px","box-sizing":"border-box"}}, 
                              this.state.model.TextoSobreTitulo
                            ),
                            m("h1", {"style":{"text-align":"center","margin":"0px","font-weight":"700","font-style":"normal","font-family":"Montserrat, sans-serif","color":"rgb(255, 255, 255)","font-size":"80px","line-height":"80px","letter-spacing":"normal","padding":"0px","box-sizing":"border-box"}}, 
                              this.state.model.Titulo
                            ),
                            m("p", {"style":{"text-align":"center","font-weight":"300","font-style":"normal","font-family":"Poppins, sans-serif","color":"rgb(255, 255, 255)","font-size":"70px","line-height":"84px","letter-spacing":"3px","margin":"0px","padding":"0px","box-sizing":"border-box"}},
                              [
                                this.state.model.Subtitulo,
                                m.trust("&nbsp;")
                              ]
                            )
                          ]
                        )
                      ),
                      m("div", {"data-widget-id":"wid_1653920545_pmbe4ebh2","data-widget":"button","style":{"padding-right":"0px","padding-left":"0px","padding-bottom":"0px","padding-top":"0px","text-align":"center","position":"relative","margin":"0px","box-sizing":"border-box"}}, 
                        m("a", {"href":"/contact/#tickets","data-action":"page","style":{"padding":"16px 40px","min-width":"167px","border-style":"solid","border-width":"1px","border-color":"rgb(255, 255, 255)","border-radius":"0px","background-color":"rgba(0, 0, 0, 0)","font-size":"14px","position":"relative","text-align":"center","z-index":"1","transition":"all 0.3s ease 0s","line-height":"14px","border":"1px solid rgb(255, 255, 255)","margin":"0px","letter-spacing":"normal","background":"rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box","overflow":"hidden","display":"inline-flex","align-items":"center","justify-content":"center","flex-flow":"row nowrap","cursor":"pointer","text-decoration":"none solid rgb(51, 122, 183)","color":"rgb(51, 122, 183)","box-sizing":"border-box"}},
                          [
                            m("span", {"style":{"display":"none","position":"relative","align-items":"center","justify-content":"center","transition":"all 0.3s ease 0s","flex-shrink":"0","inset":"auto","float":"none","margin":"0px","padding":"0px","box-sizing":"border-box","font-style":"normal","font-variant":"normal","font-kerning":"auto","font-optical-sizing":"auto","font-feature-settings":"normal","font-variation-settings":"normal","font-weight":"400","font-stretch":"100%","line-height":"14px","font-family":"FontAwesome","font-size":"14px","text-rendering":"auto","-webkit-font-smoothing":"antialiased"}}),
                            m("span", {"style":{"display":"none","border":"0px none rgb(51, 122, 183)","margin":"0px","transition":"border-color 0.5s ease 0s","padding":"0px","box-sizing":"border-box"}}),
                            m("span", {"style":{"font-size":"14px","letter-spacing":"normal","font-family":"Poppins, sans-serif","font-style":"normal","font-weight":"500","color":"rgb(255, 255, 255)","text-decoration":"none solid rgb(255, 255, 255)","position":"relative","transition":"all 0.3s ease 0s","z-index":"1","margin":"0px","padding":"0px","box-sizing":"border-box"}, 
                           }, this.state.model.botonCotizacion)
                  ])
                      )
                    ]
                  )
                )
              )
            )
      )
    )
    )
          ]

  }
}
     
