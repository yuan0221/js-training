class EventEmitter {
  constructor() {
    // 保存事件名称与处理函数关系
    this.eventMap = {}
  }

  // 注册
  on(type, handler) {
    if(!(handler instanceof Function)) return '请传函数'

    // 事件队列不存在时初始化为空数组
    if(!this.eventMap[type]) this.eventMap[type] = []

    this.eventMap[type].push(handler)
  }

  // 触发，params为传参
  emit(type, params) {
    if(this.eventMap[type]) {
      this.eventMap[type].forEach(handler => {
        handler(params)
      });
    }
  }

  // 删除事件队列
  off(type, handler) {
    if(this.eventMap[type]) {
      this.eventMap[type].splice(this.eventMap[type].indexOf(handler), 1)
    }
  }
}

export default EventEmitter