<template>
  <main class="context">
    
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap");
.context {
  .header,
  .footer {
    display: flex;
    justify-content: flex-end;
    padding: 8vw;
  }
  .footer {
    margin-top: -22vw;
    background-color: #292a2e;
    img {
      mix-blend-mode: difference;
    }
  }
  .content {
    .s-break {
      display: block;
      height: 3.73vw;
    }
    .s-01 {
      display: block;
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: bold;
      font-size: 7.46vw;
      line-height: 130%;
    }
    .s-02 {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 600;
      font-size: 3.73vw;
      line-height: 130%;
    }
    .s-03 {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: normal;
      font-size: 3.73vw;
      line-height: 130%;
    }
    .s-04 {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: bold;
      font-size: 4.8vw;
      line-height: 130%;
    }
    .s-05 {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: normal;
      font-size: 4.8vw;
      line-height: 130%;
    }
    .s-06 {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: normal;
      font-size: 2.6vw;
      line-height: 3.4vw;
      text-align: right;
      text-transform: uppercase;
    }
    .s-07 {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: bold;
      font-size: 12.8vw;
      line-height: 130%;
    }
    .introduction {
      margin: 10.66vw;
    }
    .map {
      margin-bottom: 37.33vw;
      .label {
        margin: 0 1.33vw 2.4vw 0;
      }
      img {
        width: 100%;
        height: auto;
      }
      .desc {
        margin: -12vw 12vw 12vw;
      }
      .s-03,
      .s-04,
      .s-05 {
        display: block;
      }
    }
    .definition {
      padding: 38.66vw 12vw;
      background-color: #292a2e;
      color: #fff;
      text-align: center;
    }
    .container-01 {
      padding: 38.66vw 12vw;
      .label {
        margin: 0 1.33vw 2.4vw 0;
      }
      .s-04 {
        display: block;
      }
    }
    .queue {
      padding-bottom: 38.66vw;
      .label {
        margin: 0 1.33vw 2.4vw 0;
      }
      img {
        width: 100%;
        height: auto;
      }
      .desc {
        margin: 21.86vw 12vw 12vw;
      }
      .s-03,
      .s-04,
      .s-05 {
        display: block;
      }
    }
    .smile {
      padding-bottom: 38.66vw;
      .label {
        position: absolute;
        transform: translate3d(60.2vw, 0, 0);
      }
      img {
        width: 72.53vw;
        height: auto;
        transform: rotate(-5.6deg) translate3d(-13.96vw, 0, 0);
      }
      .desc {
        margin: 21.86vw 12vw 12vw;
      }
      .s-03,
      .s-04,
      .s-05 {
        display: block;
      }
    }
    .pelmel {
      position: relative;
      img {
        width: 44.53vw;
        height: auto;
      }
      .desc {
        position: absolute;
        top: 50%;
        left: 60%;
        width: 55%;
        transform: translate3d(-50%, -50%, 0);
      }
    }
    .numbers {
      padding: 38.66vw 12vw;
      background-color: #292a2e;
      color: #fff;
      text-align: center;
      .s-03,
      .s-04,
      .s-07 {
        display: block;
      }
    }
    .tribunal {
      position: relative;
      padding: 38.66vw 0;
      .label {
        position: absolute;
        transform: translate3d(62.2vw, -18vw, 0) rotate(5.6deg);
      }
      img {
        position: relative;
        &:nth-child(2) {
          position: absolute;
          top: 30%;
          left: 50%;
          width: 74.53vw;
          height: auto;
          transform: translate3d(-50%, -50%, 0);
        }
        &:nth-child(3) {
          width: 80.53vw;
          height: auto;
          transform: rotate(5.6deg) translate3d(23.96vw, 0, 0);
        }
      }
      p {
        padding: 17.06vw 12vw;
      }
      .s-04 {
        display: block;
      }
    }
    .trial {
      position: relative;
      padding: 38.66vw 12vw;
      background-color: #292a2e;
      color: #fff;
      .label {
        position: absolute;
        top: 0;
        color: #000;
        transform: rotate(-5.6deg) translate3d(-5.5vw, -28vw, 0);
      }
      img {
        position: absolute;
        top: 0;
        width: 72.53vw;
        height: auto;
        transform: rotate(-5.6deg) translate3d(-20.2vw, -50%, 0);
      }
      .s-04 {
        display: block;
      }
    }
    .container-02 {
      padding: 17.06vw 12vw;
      .label {
        margin: 0 1.33vw 2.4vw 0;
      }
      .s-04 {
        display: block;
      }
    }
    .container-03 {
      padding: 17.06vw 12vw 0;
      .label {
        margin: 0 1.33vw 2.4vw 0;
      }
      .s-04 {
        display: block;
      }
    }
  }
}
</style>
