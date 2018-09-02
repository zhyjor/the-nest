<template>
  <div class="main-header visible">
    <div class="container">
      <a class="logo">
        <img
          src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"
          alt="掘金"
          class="logo-img">
      </a>
      <nav class="main-nav">
        <ul class="nav-list">
          <li class="main-nav-list">
            <div class="phone-show-menu">
              <span>首页</span>
              <div class="icon ion-arrow-down-b"></div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FixedTop'
}
</script>

<style scoped lang="scss">
  .main-header {
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
    color: #909090;
    height: 5rem;
    z-index: 250;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: all .2s;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    .container {
      max-width: 960px;
      margin: auto;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      height: 100%;
      osition: relative;
      margin: 0 auto;
      width: 100%;
      max-width: 960px;
      .logo {
        margin-right: 2rem;
        img {
          border-style: none;
        }
      }
      a {
        text-decoration: none;
        cursor: pointer;
        color: #909090;
      }
      .main-nav {
        height: 100%;
        -webkit-box-flex: 1;
        -ms-flex: 1 0 auto;
        flex: 1 0 auto;
        .nav-list {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          height: 100%;
          margin: 0;

          -webkit-box-pack: end;
          -ms-flex-pack: end;
          justify-content: flex-end;
          position: relative;

          .main-nav-list {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            .phone-show-menu {
              cursor: pointer;
              display: none;
            }
          }
          @media (max-width: 980px) {
            .main-nav-list {
              display: block;
              position: absolute;
              left: 0;
              top: 0;
              background-color: #fff;
              .phone-show-menu {
                height: 5rem;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                color: #007fff;
                font-size: 1.3rem;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                padding: 0 2rem;
                span {
                  margin-right: .5rem;
                }
              }
            }
          }
        }
      }
    }
    @media (max-width: 980px) {
      .container {
        width: 96%;
        .logo {
          margin-right: 0;
        }
      }
    }

  }

  .visible {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

</style>
