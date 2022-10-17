function BoardMember(name, homeState,training){
    this.name=name;
    this.homeState=homeState;
    this.training=training;
    this.veto=function(){
        return "No, I must disagree";

    };
    this.approve=function(){
        return "you can do that";

    };
    this.releasePressStatement=function(){
        return "you will see great things from scuber";
    };
    this.sayHi=function(){
        return 'Hi , My Name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}. ';
    };
}