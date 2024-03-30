package runners;

 

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		
    features = "src\\test\\resources\\features\\CodefiosLogin.feature",
//    tags = "",
    glue = "steps",
    monochrome = true,
    dryRun = false,
    plugin = {
    		"pretty",
    		"html:target/reports/cucember.html",
    		"json:target/reports/cucember.json"
    }
)
public class Runner {

}
