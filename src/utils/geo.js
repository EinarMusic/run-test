import { ref } from "vue"

export const current = ref({})

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  function success(pos) {
    const crd = pos.coords;

    current.value = { latitude: crd.latitude, longitude: crd.longitude }
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
export function currentGeo() {
  navigator.geolocation.getCurrentPosition(success, error, options);
}


  
