
/*
 * @Author: zfd
 * @Date: 2020-09-24 23:00:59
 * @LastEditTime: 2020-11-16 14:04:29
 * @Description: common state
 * @FilePath: \trip-enterprise\src\store\modules\common.js
 */

const state = {
  isOrNo: [
    { key: true, val: '是' },
    { key: false, val: '否' }
  ],
  genderMap: [
    { id: 0, name: '男' },
    { id: 1, name: '女' }
  ],
  educationMap: [
    { id: 0, name: '博士' },
    { id: 1, name: 'MBA/EMBA' },
    { id: 2, name: '硕士' },
    { id: 3, name: '本科' },
    { id: 4, name: '大专' },
    { id: 5, name: '中专/中技' },
    { id: 6, name: '高中' },
    { id: 7, name: '初中及以下' }
  ],
  nationMap: [
    { id: 0, name: '汉族' },
    { id: 1, name: '苗族' },
    { id: 2, name: '朝鲜族' },
    { id: 3, name: '回族' },
    { id: 4, name: '藏族' },
    { id: 5, name: '维吾尔族' }
  ],
  certificateMap: [
    { id: 1, name: '职业资格证书' },
    { id: 2, name: '职业技能等级证书' },
    { id: 3, name: '就业合格证书' }
  ],
  rankMap: [
    { id: 0, name: '甲级' },
    { id: 1, name: '乙级' },
    { id: 2, name: '丙级' }
  ],
  trainingMap: [
    { id: 0, name: '免费职业培训' },
    { id: 1, name: '获证奖补培训' }
  ],
  normalStatus: [
    { key: 0, val: '正常' },
    { key: 1, val: '禁用' },
    { key: -1, val: '已删除' }
  ],
  actionMap: {
    'enabl': 0,
    'disable': 1,
    'delete': -1
  },
  statusType: [
    { key: 0, val: 'success' },
    { key: 1, val: 'warning' },
    { key: -1, val: 'danger' },
    { key: 3, val: 'info' }
  ]
}
const getters = {

}

const mutations = {

}
const actions = {

}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
