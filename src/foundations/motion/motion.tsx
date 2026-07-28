import {
  motionTokens,
  easingTokens,
} from "./motion.constants";


export default function Motion() {

  return (

    <div className="space-y-10">


      <section className="space-y-6">

        <h2 className="text-xl font-semibold">
          Duration
        </h2>


        {
          motionTokens.map((token) => (

            <div
              key={token.name}
              className="
                flex
                items-center
                gap-6
              "
            >

              <div
                className="
                  size-12
                  rounded-md
                  bg-primary
                  animate-pulse
                "
                style={{
                  animationDuration: token.value,
                }}
              />


              <div>

                <p className="font-medium">
                  {token.name}
                </p>


                <p className="
                  text-sm
                  text-text-secondary
                ">
                  {token.value}
                </p>


                <p className="
                  text-sm
                  text-text-secondary
                ">
                  {token.usage}
                </p>

              </div>


            </div>

          ))
        }


      </section>



      <section className="space-y-6">


        <h2 className="text-xl font-semibold">
          Easing
        </h2>


        {
          easingTokens.map((token) => (

            <div
              key={token.name}
              className="space-y-2"
            >

              <p className="font-medium">
                {token.name}
              </p>


              <p className="
                text-sm
                text-text-secondary
              ">
                {token.value}
              </p>


              <p className="
                text-sm
                text-text-secondary
              ">
                {token.usage}
              </p>


            </div>

          ))
        }


      </section>


    </div>

  );

}
