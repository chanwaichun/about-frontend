
      class MyPromise {
        constructor(fun) {
          this.status = "pending";
          this.fun = fun;
          this.callback = [];
          this.result = null;
          const resolve = (res) => {
            this.status = "success";
            this.result = res;
            if (this.callback.length > 0) {
              this.callback.forEach((callFunc) => {
                callFunc(this.result);
              });
            }
          };
          const reject = (err) => {
            this.status = "fail";
            console.log(err);
          };
          this.fun(resolve, reject);
        }

        then(func) {
          if (this.status === "pending") {
            this.callback.push(func);
          } else if (this.status === "success") {
            this.callback.forEach((callFunc) => {
              callFunc(this.result);
            });
          }
        }
      }

      const p = new MyPromise((resolve, reject) => {
        setTimeout(() => {
          resolve(111);
        }, 2000);
      });
      p.then((res) => {
        console.log(res, 1);
      });
      p.then((res) => {
        console.log(res, 1);
      });
