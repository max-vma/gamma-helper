import { ref } from 'vue'

export const useHover = (delay: number = 50) => {
  const timeout = ref<null | number>(null)
  const isHovered = ref(false)

  const onHover = (e: Event) => {
    console.log(e.target)
    if (e.type === 'mouseover' || e.type === 'mouseout') {
      if (timeout.value) clearTimeout(timeout.value)
      if (e.type === 'mouseover') {
        isHovered.value = true
      } else {
        timeout.value = window.setTimeout(() => {
          isHovered.value = false
        }, delay)
      }
    }
  }

  return {
    isHovered,
    onHover,
  }
}
