#include <bits/stdc++.h>
using namespace std;

int last(int arr[], int n, int i, int key){
    if(i==n)
        return -1;

    
    int pO=last(arr,n,i+1,key);
    if(pO!=-1){
        return pO;
    }
    if(arr[i]==key){
        return i;
    }
    else return -1;
}

int main()
{
     int test=1;
    //  cin>>test;
    while(test--){
        int arr[8]={3,1,4,2,3,5,3,6};
        cout<<last(arr,8,0,3);
}    
    return 0;
}