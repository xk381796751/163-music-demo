{
	let view = {
		el: '.page-1',
		init() {
			this.$el = $(this.el)
		},
		show() {
			this.$el.addClass('active')
		},
		hide() {
			this.$el.removeClass('active')
		}
	}
	let model = {}
	let controller = {
		init(view, model) {
			this.view = view
			this.view.init()
			this.model = model
			this.bindEventHub()
			this.loadModule1()
			this.loadModule2()
		},
		bindEventHub() {
			window.eventHub.on('selectTab', (tabName) => {
				console.log('tabName1', tabName)
				if (tabName === 'page-1') {
					this.view.show()
				} else {
					this.view.hide()
				}
			})
		},
		loadModule1() {
			let script1 = document.createElement('script')
			script1.src = './js/index/page-1-1.js'
			document.body.appendChild(script1)
			script1.onload = function () {
				console.log('模块1加载完毕')
			}
		},
		loadModule2() {
			let script2 = document.createElement('script')
			script2.src = './js/index/page-1-2.js'
			document.body.appendChild(script2)
			script2.onload = function () {
				console.log('模块2加载完毕')
			}
		}
	}
	controller.init(view, model)
}