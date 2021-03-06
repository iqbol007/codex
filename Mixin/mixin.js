let eventMixin = {
    /**
     * Подписаться на событие, использование:
     * menu.on('select', function(item) { ... }
     */
    on(eventName, handler) {
    
      if (!this._eventHandlers) this._eventHandlers = {};
      if (!this._eventHandlers[eventName]) {
        this._eventHandlers[eventName] = [];
      }
      this._eventHandlers[eventName].push(handler);
    },
  
    /**
     * Отменить подписку, использование:
     * menu.off('select', handler)
     */
    off(eventName, handler) {
      let handlers = this._eventHandlers && this._eventHandlers[eventName];
      if (!handlers) return;
      for (let i = 0; i < handlers.length; i++) {
        if (handlers[i] === handler) {
          handlers.splice(i--, 1);
        }
      }
    },
  
    /**
     * Сгенерировать событие с указанным именем и данными
     * this.trigger('select', data1, data2);
     */
    trigger(eventName, ...args) {
      if (!this._eventHandlers || !this._eventHandlers[eventName]) {
        return; // обработчиков для этого события нет
      }
  
      // вызовем обработчики
      this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
    }
  };