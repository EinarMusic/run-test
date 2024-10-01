import { ref } from "vue"

export const watch = ref([])

const options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;

  watch.value.push({latitude: crd.latitude, longitude: crd.longitude})
}

function error(err) {
  console.error(`ERROR(${err.code}): ${err.message}`);
}

export function watchGeo() {
    navigator.geolocation.watchPosition(success, error, options);
}
