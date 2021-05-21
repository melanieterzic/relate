<template>
  <t-story :story="getStory(0)"/>
</template>

<script>
import content from '~/assets/datas/content.json';
export default {
  methods: {
    getStory(index) {
      const stories = [];
      content.children.forEach(child => {
        if (child.name === "story") {
          stories.push(child);
        }
      });
      return stories[index];
    }
  },  
  mounted() {
    // let bytes = content.children[0].children[1].children[0].children[0].bytes;
    // bytes = Uint8Array.from(Object.values(bytes));
    // document.getElementById("ItemPreview").src = URL.createObjectURL(
    //   new Blob([bytes.buffer], { type: 'image/png' })
    // );
    

  //   function recursive(children) {
  //     let html = '';
  //     children.forEach(child => {
  //       console.log(child)
  //       child.name = child.name.replace(/\s/g, '');
  //       switch(child.type) {
  //         case 'frame':
  //           html += `<div 
  //             class="${child.type} ${child.name}"
  //             style="
  //               position: relative;
  //               width: ${child.width}px;
  //               height: ${child.height}px;
  //             "
  //           >`;
  //           if (child.children) {
  //             html += recursive(child.children);
  //           }
  //           html += `</div>`;
  //           break;
  //         case 'group':
  //           html += `<div 
  //             class="${child.type} ${child.name}"
  //             style="
  //               position: absolute;
  //               width: ${child.width}px;
  //               height: ${child.height}px;
  //             "
  //           >`;
  //           if (child.children) {
  //             html += recursive(child.children);
  //           }
  //           html += `</div>`;
  //           break;
  //         case 'image':
  //           child.bytes = Uint8Array.from(Object.values(child.bytes));
  //           html += `<img 
  //             class="${child.type} ${child.name}" 
  //             src="${URL.createObjectURL(new Blob([child.bytes.buffer], { type: 'image/png' }))}"
  //             style="
  //               position: absolute;
  //               top: ${child.position.y}px;
  //               left: ${child.position.x}px;
  //               width: ${child.width}px;
  //               height: ${child.height}px;
  //             "
  //           />`;
  //           break;
  //         case 'text':
  //           html += `<p 
  //             class="${child.type} ${child.name}" 
  //             style="
  //               position: absolute;
  //               top: ${child.position.y}px;
  //               left: ${child.position.x}px;
  //               width: ${child.width}px;
  //               height: ${child.height}px;
  //               font-family: ${child.fontFamily};
  //               font-weight: ${child.fontWeight};
  //               font-size: ${child.fontSize - 1}px;
  //               color: rgb(${child.color.r}, ${child.color.g}, ${child.color.b});
  //             "
  //           >${child.characters}</p>`;
  //           break;
  //         default:
  //           html += `<div 
  //             class="object ${child.name}"
  //             style="
  //               position: absolute;
  //               top: ${child.position.y}px;
  //               left: ${child.position.x}px;
  //               width: ${child.width}px;
  //               height: ${child.height}px;
  //               background: orange;
  //             "
  //           ></div>`;
  //           break;
  //       }
  //     });
  //     return html;
  //   }

  //   const html = recursive(content.children);
  //   this.$el.innerHTML = html;
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Caesar+Dressing&display=swap');
</style>
