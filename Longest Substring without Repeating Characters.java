class Solution {
    public int lengthOfLongestSubstring(String s) {
        Set <Character> set = new HashSet<>();
        int length = s.length();
        int start = 0;
        int end = 0;
        int result = 0;
        
        while(start< length && end <length){
            char c = s.charAt(end);
            while(set.contains(c)){
                set.remove(s.charAt(start++));
            }
            result = Math.max(result, end - start +1);
            end++;
            set.add(c);
            
        }
        return result;
}
}