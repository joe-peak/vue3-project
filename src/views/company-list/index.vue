<script setup lang="ts">
  import { reactive, ref, computed, nextTick } from 'vue';
  import type { Ref } from 'vue';
  // import { $ref } from 'vue/macros'
  import searchText from '@/assets/icons/search-text1.png';
  import partnerTag from '@/assets/icons/partner-tag.png';
  import xc from '@/assets/icons/xc-logo.png';
  import xcns from '@/assets/icons/xcns-logo.png';
  import xcfz from '@/assets/icons/xcfz.png';
  import zxcs from '@/assets/icons/zxcs.png';
  import activeStar from '@/assets/icons/star-active.png';
  import star from '@/assets/icons/star.png';

  const keyWord: Ref<string | undefined> = ref<string | undefined>('JOE');
  const current: Ref<number> = ref(1);
  // const count = $ref(0);
  // const myEmail: string = 'lon.c.zhou@gmail.com';
  const getHTML =(text: string) => computed(() => {
          const search = keyWord.value?.trim();
          if (search) {
            const words = text.split('');
            const keys = search.replace(/\s*/g, '').split('')
            keys.forEach(key => {
              for (let i = 0; i < words.length; i++) {
                if (words[i] === key) {
                  words[i] = `<span style="color: #E0222B;">${key}</span>`
                }
              }
              text = words.join('')
            });
          }
          return text
        }).value;
  const list = [
         {
           id: 1,
           logo: xc,
           name: '成都兴城投资集团有限公司',
           isPartner: true,
           tags: [
             '续存',
             '成都兴城投资集团',
             'A级纳税人',
             '国有企业',
             '市属企业',
             '国有独资'
           ],
           focused: true,
           legalPerson: '任志能',
           registerCapital: '552540',
           foundTime: '2009-03-26',
           socialUniformCreditCode: '915101006863154368',
           industry: '基础设施建设',
           address: '成都市高新区濯锦东路99号'
         },
         {
           id: 2,
           logo: xc,
           name: '成都兴城人居地产投资集团股份有限公司',
           isPartner: true,
           tags: [
             '续存',
             '成都兴城投资集团',
             'A级纳税人',
             '国有企业',
             '市属企业',
             '国有独资'
           ],
           focused: false,
           legalPerson: '王磊',
           registerCapital: '552540',
           foundTime: '2004-08-31',
           socialUniformCreditCode: '915101006863154368',
           industry: '基础设施建设',
           address: '中国（四川）自由贸易试验区成都市双流区西航港街道成新大件路289号825室'
         },
         {
           id: 3,
           logo: xcfz,
           name: '兴城发展投资集团有限公司',
           isPartner: false,
           tags: [
             '续存',
             '成都兴城投资集团',
             'A级纳税人',
             '国有企业',
             '市属企业',
             '国有独资'
           ],
           focused: true,
           legalPerson: '任志能',
           registerCapital: '200000 ',
           foundTime: '2009-03-26',
           socialUniformCreditCode: '915101006863154368',
           industry: '基础设施建设',
           address: '辽宁省葫芦岛市兴城市滨海大道75号'
         },
         {
           id: 4,
           logo: zxcs,
           name: '宿迁众兴城市建设投资有限公司',
           isPartner: true,
           tags: [
             '续存',
             '成都兴城投资集团',
             'A级纳税人',
             '国有企业',
             '市属企业',
             '国有独资'
           ],
           focused: true,
           legalPerson: '张羽',
           registerCapital: '100000',
           foundTime: '2009-03-26',
           socialUniformCreditCode: '915101006863154368',
           industry: '基础设施建设',
           address: '泗阳县众兴镇北京西路'
         },
         {
           id: 5,
           logo: xcns,
           name: '辽宁兴城农村商业银行股份有限公司',
           isPartner: false,
           tags: [
             '续存',
             '成都兴城投资集团',
             'A级纳税人',
             '国有企业',
             '市属企业',
             '国有独资'
           ],
           focused: false,
           legalPerson: '李家臻',
           registerCapital: '200000',
           foundTime: '2009-03-26',
           socialUniformCreditCode: '915101006863154368',
           industry: '基础设施建设',
           address: '辽宁省兴城市兴海路二段137号'
         }
     ];

  const onShowSizeChange = (current: number, pageSize: number) => {};
  const onPageChange = (pageNum: number) => {
    current.value = pageNum;
  };
  const onSearch = async () => { };
  const handleDetail = () => {
        // this.$router.push({
        //   name: 'enterprise-query-results-detail',
        //   params: {
        //     id: 999
        //   },
        // });
      };
  const handleIframeDetail = () => {
     window.open('/enterprise-query/results/embed/998', '_blank');
   };
  const handleAddPartner = () =>{
        // this.$refs.addPartnerForm.validate(async valid => {
        //   if (valid) {
        //     this.modalVisible = false;
        //     this.$refs.addPartnerForm.resetFields();
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });
      };
  const toggleFocus = async () => {};
  // const handleCancelModal = () => {
  //   this.modalVisible = false;
  //   this.$refs.addPartnerForm.resetFields();
  // },
  const addPartner = () => {
    // this.modalVisible = true
  };
  // const setEnterButton = () => {
  //   return <img src={searchText} alt='search' />
  // };
</script>

<template>
  <div>
    <div class="search-wrapper">
      <!-- {{ myEmail }} -->
      <a-input-search
        placeholder="请输入关键字查询"
        class="search-input"
        allowClear
        enter-button
        v-model:value="keyWord"
      />
    </div>
    <div class="search-list">
      <div class="search-summary">
        共找到<span class="total">&nbsp;5000+&nbsp;</span>条相关信息
      </div>
      <div class="result-item" v-for="item in list" :key="item.id">
        <div class="main">
          <img :src="item.logo" alt="logo" class="logo" />
          <div class="main-content">
            <div class="header">
             <!-- {{ item.name }} -->
              <span style="cursor: pointer;" v-html="getHTML(item.name)" @click="handleIframeDetail" />
              <img
                v-if="item.isPartner"
                :src="partnerTag"
                @click="handleDetail"
                alt="合作方"
                class="partner-tag"
              />
            </div>
            <div class="tags">
              <div
                class="tag-item"
                v-for="(tag, index) in item.tags"
                :key="index"
              >
                {{ tag }}
              </div>
            </div>
            <div class="info-desc">
              <div class="desc-row">
                <div class="desc-item">
                  <span class="label">法定代表人：</span>
                  <span class="legal-person value">{{ item.legalPerson }}</span>
                </div>
                <div class="desc-item">
                  <span class="label">注册资本：</span>
                  <span class="value">{{ item.registerCapital }} 万人民币</span>
                </div>
                <div class="desc-item">
                  <span class="label">成立时间：</span>
                  <span class="value">{{ item.foundTime }}</span>
                </div>
                <div class="desc-item">
                  <span class="label">社会统一信用代码：</span>
                  <span class="value">{{ item.socialUniformCreditCode }}</span>
                </div>
              </div>
              <div class="desc-row">
                <div class="desc-item">
                  <span class="label">行业：</span>
                  <span class="value">{{ item.industry }}</span>
                </div>
                <div class="desc-item">
                  <span class="label">地址：</span>
                  <span class="value">{{ item.address }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="action">
          <div class="focus-btn" @click="toggleFocus">
            <img :src="item.focused ? activeStar : star" alt="" class="star">
            <span>{{ item.focused ? '取关' : '关注' }}</span>
          </div>
          <div
            class="add-partner-btn"
            @click="addPartner"
            v-if="!item.isPartner"
          >
            <span class="plus-icon">+</span>
            <span>加入合作方</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  // :deep(.content-wrapper) {
  //   padding: 16px;
  //   display: flex;
  //   flex-direction: column;
  //   overflow: auto !important;
  // }
  // :deep(.ant-modal-body) {
  //   padding: 12px 12px 0 12px;
  // }
  // :deep(.ant-form-item) {
  //   // margin-bottom: 0;
  // }
  // :deep(.ant-modal-header) {
  //   padding: 12px;
  // }
  .partner-name {
    margin-bottom: 16px;
    text-indent: 12px;
  }
  // .search-wrapper {
  //   height: 42px;
  //   .search-input {
  //     width: 42%;
  //     :deep(.ant-input), :deep(.ant-input-search-button) {
  //       height: 42px;
  //     }
  //     :deep(.ant-input-search-button) {
  //       padding: 0;
  //     }
  //     :deep(.ant-input:focus) {
  //       box-shadow: unset;
  //     }
  //     :deep(.ant-input-group-addon) {
  //       overflow: hidden;
  //     }
  //     :deep(.ant-btn-primary:hover, .ant-btn-primary:focus) {
  //       background-color: #1890FF;
  //       border-color: #1890FF;
  //     }
  //   }
  // }
  .search-list {
    // flex-grow: 1;
    // overflow: auto;
    // background-color: aqua;
    padding-top: 16px;
    .search-summary {
      padding: 10px 0;
      color: #1D2129;
      font-weight: 500;
      font-size: 14px;
      line-height: 1;
      border-bottom: 1px solid #F0F0F0;
      .total {
        color: #E0222B;
      }
    }
    .result-item {
      display: flex;
      padding: 18px 0;
      justify-content: space-between;
      border-bottom: 1px solid #F0F0F0;
      // padding-right: 20px;
      .main {
        display: flex;
        .logo {
          width: 48px;
          height: 48px;
          margin-right: 14px;
        }
        &-content {
          display: flex;
          flex-direction: column;
          .header {
            font-weight: 500;
            font-size: 18px;
            line-height: 25px;
            color: #000000;
            display: flex;
            align-items: center;
            .partner-tag {
              cursor: pointer;
              width: 63px;
              margin-left: 12px;
            }
          }
          .tags {
            margin-top: 8px;
            display: flex;
            .tag-item {
              background: #E6F7FF;
              border-radius: 1px;
              padding: 2px 6px;
              margin-right: 8px;
              font-weight: 400;
              font-size: 10px;
              line-height: 14px;
              color: #1890FF;
              &:last-child {
                margin-right: unset;
              }
            }
          }
          .info-desc {
            margin-top: 14px;
            .desc-row {
              display: flex;
              &:first-of-type {
                margin-bottom: 8px;
              }
              .desc-item {
                // legal-person value
                font-size: 14px;
                line-height: 20px;
                margin-right: 24px;
                &:last-of-type {
                  margin-right: unset;
                }
                .label {
                  color: #8C8C8C;
                }
                .value {
                  color: #000000;
                  &.legal-person {
                    color: #1890FF;
                  }
                }
              }
            }
          }
        }
      }
      .action {
        display: flex;
        .focus-btn {
          background: #FFF;
          border: 1px solid #D9D9D9;
          border-radius: 2px;
          color: rgba(0, 0, 0, 0.85);
          font-size: 14px;
          line-height: 1;
          height: 32px;
          padding: 0 15px;
          display: flex;
          align-items: center;
          cursor: pointer;
          .star {
            margin-right: 4px;
            width: 14px;
            height: 14px;
          }
        }
        .add-partner-btn {
          height: 32px;
          background: #FFF;
          border: 1px solid #1890FF;
          border-radius: 2px;
          color: #1890FF;
          line-height: 1;
          font-size: 14px;
          padding: 0 12px;
          display: flex;
          align-items: center;
          margin-left: 12px;
          cursor: pointer;
          .plus-icon {
            margin-right: 8px;
            font-size: 23px;
            margin-top: -6px;
          }
        }
      }
    }
  }
  .page-wrapper {
    height: 64px;
    display: flex;
    padding-top: 18px;
    align-items: center;
    justify-content: flex-end;
  }
</style>
