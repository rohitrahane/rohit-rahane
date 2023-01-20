#include<stdio.h>
void main(){
    int ID;
    int pass;

    printf("Enter your ID \n");
    scanf("%d",&ID);
    switch(ID){
        case 1001:
        
        printf("Enter your password \n");
        scanf("%d",&pass);
        switch(pass){
            case 1100:
            printf("welcome");
            break;
            default:
            printf("password in incorrect..");
            break;

        }
        break;
        default:
        printf("ID in incorrect..");
    }
    return 0;
}