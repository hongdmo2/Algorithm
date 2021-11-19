function solution(a) {
    let result = []
    let team1 = 0
    let team2 = 0
    for(let i =0; i<a.length; i++){
        if(i%2==0){
            team1 += a[i];
        }
        else if(i%2==1){
            team2 += a[i];
        }
    }
    result[0] = team1
    result[1] = team2
    return result
    }
    