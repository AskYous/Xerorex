import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.util.Scanner;

public class genJson {

	public static void main(String[] args) throws FileNotFoundException, UnsupportedEncodingException {

		Scanner input = new Scanner(System.in);
		
		System.out.println("Enter Folder URL: ");
		String path = input.nextLine();
				
		File folder = new File(path);
		File[] listOfFiles = folder.listFiles();

		PrintWriter writer = new PrintWriter("C:/Users/Abdullah Al-Shehabi/Desktop/XeroreX/JSON Scripts/" + folder.getName() + ".json", "UTF-8");
		
		
		
		
		writer.print('{' +"\n" + "\t\"title\":" + " \"" + folder.getName() + "\",\n" + "\t\"subtitle\":" + " \"Product Summary\",\n" + "\t\"rows\": " + '[' + "\n" + "\t\t" + '{' + "\n" + "\t\t\t\"title\": \"\",\n" + "\t\t\t\"columns\": " + '[' + "\n");
		
		writer.print("\t\t\t\t");
		
	    for (int i = 0; i < listOfFiles.length; i++) {
	      
	    	if (listOfFiles[i].isFile()) {
	        
	    		writer.print('{' + "\n" + "\t\t\t\t\t\t\"title\": " + "\"" + listOfFiles[i].getName().substring(0, listOfFiles[i].getName().lastIndexOf('.')) + "\",\n");
	    		writer.print("\t\t\t\t\t\t\"image\": " + "\"" +  "public/img/" + folder.getName() + "/" + listOfFiles[i].getName() + "\",\n");
	    		writer.print("\t\t\t\t\t\t\"description\": " + "\"Product Summary\"");
	    		writer.print("\n\t\t\t\t" + '}');
	    		
	    		if(i != (listOfFiles.length - 1))
	    			writer.print(",");
	    			
	      
	      } else if (listOfFiles[i].isDirectory()) {
	        
	      }
	    
	    }
	    
	    writer.println("\n\t\t\t" + ']');
	    writer.println("\t\t" + '}');
	    writer.println("\t" + ']');
	    writer.println('}');
	    
	    writer.close();
	    
	    
	    
	}

}
