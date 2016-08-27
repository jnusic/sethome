/* ---- particles.js config ---- */
particlesJS("particles-js-bg-static", {
  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area": 400
      }
    },
    "color": {
      "value": ["#ffffff"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 3,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.7
        ,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 30,
      "color": "#ffffff",
      "opacity": 0.8,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.1,
      "direction": "top",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 3,
        "rotateY": 3
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 30,
        "line_linked": {
          "opacity": 0.4
        }
      },
      "bubble": {
        "distance": 80,
        "size": 40,
        "duration": 2,
        "opacity": 0.8,
        "speed": 30
      },
      "repulse": {
        "distance": 50,
        "duration": 10
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
particlesJS("particles-js-bg-animated", {
  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#ffffff", "#65C097", "#65C097", "#65C097", "#A0859B", "#C845A9", "#C845A9", "#C845A9", "#C845A9", "#C845A9", "#4E82AB"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 3,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0.2,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.7
        ,
        "size_min": 1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 30,
      "color": "#ffffff",
      "opacity": 0.8,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 3,
        "rotateY": 3
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 30,
        "line_linked": {
          "opacity": 0.4
        }
      },
      "bubble": {
        "distance": 80,
        "size": 40,
        "duration": 2,
        "opacity": 0.8,
        "speed": 30
      },
      "repulse": {
        "distance": 50,
        "duration": 10
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
particlesJS("particles-js-constellations", {
  "particles": {
    "number": {
      "value": 1,
      "density": {
        "enable": true,
        "value_area": 100
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.2,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 300,
      "opacity": 0.2
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 250,
        "rotateY": 250
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 30,
        "line_linked": {
          "opacity": 0.4
        }
      },
      "bubble": {
        "distance": 80,
        "size": 40,
        "duration": 2,
        "opacity": 0.8,
        "speed": 30
      },
      "repulse": {
        "distance": 50,
        "duration": 10
      },
      "push": {
        "particles_nb": 1
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});